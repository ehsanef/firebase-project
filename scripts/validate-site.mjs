import { readFile, access, readdir } from "node:fs/promises";
import { resolve, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "index.html",
  "styles.css",
  "app.js",
  "site.config.js",
  "legal.html",
  "404.html",
  "site.webmanifest",
  "assets/logo.svg",
  "assets/og-cover.svg"
];

const failures = [];
const warnings = [];
const pass = (message) => console.log(`✓ ${message}`);
const fail = (message) => failures.push(message);

for (const file of required) {
  try {
    await access(join(root, file));
    pass(`Found ${file}`);
  } catch {
    fail(`Missing required file: ${file}`);
  }
}

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if ([".git", "node_modules", "_site"].includes(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
};

const allFiles = await walk(root);
const forbiddenNames = [
  /private_key\.pem$/i,
  /source-and-seller/i,
  /seller-tools/i,
  /customer.*\.zip$/i,
  /customer-license/i,
  /\.env(?:\.|$)/i
];
for (const file of allFiles) {
  const name = relative(root, file).replaceAll("\\", "/");
  if (forbiddenNames.some((pattern) => pattern.test(name))) {
    fail(`Public repository contains a forbidden/private artifact: ${name}`);
  }
}
pass("No seller package, private signing key, customer ZIP, license file, or .env file detected");

const htmlFiles = ["index.html", "legal.html", "404.html"];
for (const htmlFile of htmlFiles) {
  const source = await readFile(join(root, htmlFile), "utf8");
  const ids = [...source.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) fail(`${htmlFile} contains duplicate IDs: ${[...new Set(duplicates)].join(", ")}`);
  else pass(`${htmlFile} has unique IDs`);

  const refs = [...source.matchAll(/(?:src|href)=["']([^"'#?]+)["']/g)]
    .map((match) => match[1])
    .filter((ref) => !/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(ref));
  for (const ref of refs) {
    const local = resolve(root, ref);
    if (!local.startsWith(root)) {
      fail(`${htmlFile} references a path outside the site root: ${ref}`);
      continue;
    }
    try { await access(local); }
    catch { fail(`${htmlFile} references missing local asset: ${ref}`); }
  }
  pass(`${htmlFile} local references checked`);
}

const index = await readFile(join(root, "index.html"), "utf8");
const app = await readFile(join(root, "app.js"), "utf8");
const config = await readFile(join(root, "site.config.js"), "utf8");
const keys = [...index.matchAll(/data-i18n=["']([^"']+)["']/g)].map((match) => match[1]);
for (const key of new Set(keys)) {
  const occurrences = app.split(`${key}:`).length - 1;
  if (occurrences < 2) fail(`Translation key "${key}" is not present in both English and Persian dictionaries`);
}
pass(`${new Set(keys).size} storefront translation keys checked`);

if (!/status:\s*["'](?:prelaunch|live)["']/.test(config)) fail("site.config.js must set status to prelaunch or live");
if (/private_key|seller-tools|source-and-seller/i.test(index + app + config)) fail("Public runtime files contain seller-only references");
if (!/prefers-reduced-motion/.test(await readFile(join(root, "styles.css"), "utf8"))) warnings.push("Reduced-motion CSS was not detected");
if (!/aria-|role=|<main\b/i.test(index)) warnings.push("Accessibility landmarks/attributes appear incomplete");

JSON.parse(await readFile(join(root, "site.webmanifest"), "utf8"));
JSON.parse(await readFile(join(root, "firebase.json"), "utf8"));
pass("Manifest and Firebase configuration are valid JSON");

for (const warning of warnings) console.warn(`! ${warning}`);
if (failures.length) {
  console.error("\nValidation failed:");
  failures.forEach((message) => console.error(`✗ ${message}`));
  process.exit(1);
}
console.log("\nNikaToolFlow storefront validation passed.");

/**
 * NikaToolFlow storefront configuration.
 * Keep the public storefront separate from the paid customer ZIP and all seller-only files.
 */
window.NTF_CONFIG = Object.freeze({
  productName: "NikaToolFlow",
  version: "1.3.1",

  // prelaunch | live
  // Keep this as "prelaunch" until every Premiere/OS combination you advertise has a dated pass result.
  status: "prelaunch",

  // Shown only when status is "live". Examples: "$49", "€49", "4,900,000 تومان".
  displayPrice: "",
  compareAtPrice: "",

  // Use a secure hosted checkout (Lemon Squeezy, Paddle, Stripe Checkout, etc.).
  checkoutUrl: "",

  // Point to a controlled trial-delivery page or expiring download—not the public repository.
  trialUrl: "",

  // Public contact destination used while checkout is disabled.
  contactUrl: "https://github.com/ehsanef",
  contactLabel: "Contact @Ehsanef",

  // Public support address shown in legal/support copy after you replace it.
  supportEmail: "",

  // Optional public compatibility matrix URL.
  testMatrixUrl: "",

  // "en" or "fa". A returning visitor's saved choice takes priority.
  defaultLanguage: "en"
});

(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const config = {
    productName: "NikaToolFlow",
    version: "1.3.1",
    status: "prelaunch",
    displayPrice: "",
    compareAtPrice: "",
    checkoutUrl: "",
    trialUrl: "",
    contactUrl: "",
    contactLabel: "Contact",
    supportEmail: "",
    testMatrixUrl: "",
    defaultLanguage: "en",
    ...(window.NTF_CONFIG || {})
  };

  const translations = {
    en: {
      skip: "Skip to content",
      navFeatures: "Features",
      navWorkflow: "Workflow",
      navCompatibility: "Compatibility",
      navFaq: "FAQ",
      navBuy: "Get NikaToolFlow",
      heroLine1: "Edit at the",
      heroLine2: "speed of thought.",
      heroLead: "Thirty-five focused tools inside one compact Premiere Pro panel—so your hands stay on the story, not buried in menus.",
      heroPrimary: "Join early access",
      heroSecondary: "See it in action",
      heroFootStrong: "Built for editors who move fast.",
      heroFoot: "Windows + macOS · 7-day trial · Device-bound activation",
      statTools: "focused tools",
      statUndo: "undo steps",
      statTrial: "day trial",
      statPremiere: "Premiere editions",
      problemKicker: "Your edit deserves momentum",
      problemTitle: "The timeline should feel like an instrument—not a maze.",
      problemBody: "Repetitive dialogs, buried commands, manual beat marking, and constant panel switching quietly steal hours from every project. NikaToolFlow compresses those actions into a fast, searchable control surface that docks beside your timeline.",
      beforeLabel: "Before",
      beforeText: "Menu hunting, repeated setup, broken focus.",
      afterLabel: "With Nika",
      afterText: "One panel, consistent actions, creative flow.",
      featuresKicker: "One panel. Every editing rhythm.",
      featuresTitle: "Built around the moments that slow editors down.",
      featuresLead: "From acquiring a clip to landing motion, audio, and markers, each tool is designed to remove a small interruption—and protect your momentum.",
      ytTitle: "YouTube Grab, directly into the cut.",
      ytBody: "Analyze an authorized link, choose quality, pull a full video or exact IN/OUT range, convert to a Premiere-safe format, import, and place at the playhead.",
      beatTitle: "Real beat detection. Markers that move with music.",
      beatBody: "Detect BPM and transients from one selected music clip, then place source markers that remain attached when the clip moves.",
      undoTitle: "A safety net made for panel actions.",
      undoBody: "Nika Undo keeps a 20-step history for supported tools and works with Ctrl/Cmd+Z while the panel has focus.",
      motionTitle: "Motion that lands on the real clip boundaries.",
      motionBody: "Create full-clip zooms, punch-ins, fades, and audio transitions with source-relative keyframes—even on trimmed or reverse-speed clips.",
      smartTitle: "Paste media, not problems.",
      smartBody: "Smart Paste turns copied files, clipboard images, and direct media URLs into durable project assets instead of fragile temporary files.",
      panelTitle: "Compact when you need space. Searchable when you need speed.",
      panelBody: "Dock it, resize it, switch language and accent, hide experimental tools, and find any action in seconds.",
      explorerKicker: "Explore the toolkit",
      explorerTitle: "A focused toolset for every phase of the edit.",
      explorerLead: "Choose a category to see how NikaToolFlow turns repetitive Premiere actions into quick, predictable workflows.",
      tabQuick: "Quick",
      tabTimeline: "Timeline",
      tabMotion: "Motion",
      tabAudio: "Audio",
      tabMarkers: "Markers",
      flowKicker: "From interruption to flow",
      flowTitle: "Three moves. One uninterrupted edit.",
      flow1Title: "Find the action",
      flow1Body: "Search, filter by category, or keep the panel in compact mode beside your timeline.",
      flow2Title: "Run with context",
      flow2Body: "NikaToolFlow reads your selection, asks only for the parameters it needs, and acts in place.",
      flow3Title: "Stay reversible",
      flow3Body: "Supported actions enter a 20-step Nika Undo history, keeping experimentation safe.",
      compatKicker: "Direct-install CEP edition",
      compatTitle: "Made to fit the Premiere setups editors already use.",
      compatBody: "NikaToolFlow 1.3.1 targets Premiere Pro 2020–2026 on Windows 10/11 and macOS. Exact builds should be confirmed in the published test matrix before purchase.",
      compatNote: "Experimental QE-based tools are optional, hidden by default, and clearly separated from guaranteed core functionality.",
      pricingKicker: "Keep the tool. Keep the momentum.",
      pricingTitle: "One focused panel for years of faster edits.",
      pricingLead: "Start with the included seven-day trial. Upgrade when NikaToolFlow earns its place in your workspace.",
      value1Title: "35 workflow tools",
      value1Body: "Quick, timeline, motion, audio, markers, and utilities.",
      value2Title: "Device-bound license",
      value2Body: "Signed offline activation for one licensed workstation.",
      value3Title: "Updates for this CEP edition",
      value3Body: "Maintenance releases and installation improvements.",
      value4Title: "English + Persian interface",
      value4Body: "Choose the language that keeps you moving.",
      priceFrom: "Launch",
      priceDescription: "The storefront is ready. Public checkout opens after the advertised Premiere/OS test matrix is complete.",
      priceButton: "Request early access",
      trialButton: "Start 7-day trial",
      secureText: "Secure hosted checkout · Digital delivery · Activation guide",
      metaDevice: "device",
      metaTrial: "trial days",
      metaVersion: "version",
      faqKicker: "Questions, answered",
      faqTitle: "Everything you need before installing.",
      faqLead: "Still need help? The support address can be configured in one line before launch.",
      faq1Q: "Which Premiere versions are supported?",
      faq1A: "The CEP edition targets Premiere Pro 2020 through 2026. Because native commands can vary by build, OS, focus, and UI language, only exact combinations listed in the published test matrix should be treated as guaranteed.",
      faq2Q: "How does the seven-day trial work?",
      faq2A: "Install the customer package, open NikaToolFlow from Window → Extensions, and select “Start 7-day trial.” Trial state remains on the workstation across Premiere restarts.",
      faq3Q: "How is a paid license activated?",
      faq3A: "NikaToolFlow displays a Device ID. The seller issues a signed license for that workstation, and you paste it into the activation window. The current edition supports offline verification.",
      faq4Q: "Does YouTube Grab bypass restrictions?",
      faq4A: "No. It is intended only for media you own, have permission to use, or are otherwise authorized to download. It does not bypass DRM or access controls.",
      faq5Q: "What happens to imported clipboard images?",
      faq5A: "Smart Paste stores clipboard images and direct URL media in a durable NikaToolFlow folder instead of an operating-system temp folder, helping prevent offline media later.",
      faq6Q: "Are experimental tools included?",
      faq6A: "Optional experimental tools are included but hidden by default. Some use Premiere’s unsupported QE DOM and should be tested on a duplicate project before production use.",
      finalKicker: "Less friction. More finished work.",
      finalTitle: "Make Premiere feel built around your hands.",
      finalBody: "Bring your most repeated actions into one precise, compact, reversible workflow.",
      finalButton: "Get NikaToolFlow",
      footerTagline: "A professional Premiere Pro workflow panel for editors who value speed and control.",
      footerProduct: "Product",
      footerPricing: "Pricing",
      footerSupport: "Support",
      footerInstall: "Installation",
      footerContact: "Contact",
      footerLegal: "Legal",
      footerTerms: "Terms",
      footerPrivacy: "Privacy",
      footerRefunds: "Refund policy",
      footerRights: "All rights reserved.",
      footerAdobe: "Adobe and Premiere Pro are trademarks of Adobe. NikaToolFlow is an independent product.",
      modalBack: "Back to site",
      statusPrelaunch: `Version ${config.version} · Early access`,
      statusLive: `Version ${config.version} · Available now`,
      ribbonPrelaunch: "EARLY ACCESS",
      ribbonLive: "AVAILABLE NOW",
      livePricePrefix: "One-time",
      livePriceDescription: "A one-time workstation license with the included seven-day trial, digital delivery, and activation guide.",
      liveBuy: "Buy NikaToolFlow",
      prelaunchPrice: "Launch pricing",
      modalPrelaunchKicker: "EARLY ACCESS",
      modalPrelaunchTitle: "NikaToolFlow is preparing for launch.",
      modalPrelaunchBody: "The storefront and delivery flow are ready. Public checkout will be enabled after the advertised Premiere test matrix is complete.",
      modalTrialTitle: "The trial delivery link is not public yet.",
      modalTrialBody: "The seven-day trial is included in the customer package. Use the contact button to request controlled early access.",
      modalContact: config.contactLabel || "Contact @Ehsanef",
      modalConfigTitle: "Checkout is not connected yet.",
      modalConfigBody: "Add your hosted checkout URL in site.config.js before switching the storefront to live mode."
    },
    fa: {
      skip: "رفتن به محتوای اصلی",
      navFeatures: "قابلیت‌ها",
      navWorkflow: "گردش کار",
      navCompatibility: "سازگاری",
      navFaq: "پرسش‌ها",
      navBuy: "دریافت NikaToolFlow",
      heroLine1: "تدوین با",
      heroLine2: "سرعت فکر شما.",
      heroLead: "۳۵ ابزار متمرکز در یک پنل جمع‌وجور پریمیر؛ تا دست شما روی داستان بماند، نه میان منوهای تکراری.",
      heroPrimary: "دسترسی زودهنگام",
      heroSecondary: "نمایش عملکرد",
      heroFootStrong: "ساخته‌شده برای تدوینگرهای سریع.",
      heroFoot: "ویندوز و macOS · هفت روز آزمایشی · فعال‌سازی وابسته به دستگاه",
      statTools: "ابزار متمرکز",
      statUndo: "مرحله بازگشت",
      statTrial: "روز آزمایش",
      statPremiere: "نسخه‌های پریمیر",
      problemKicker: "تدوین شما شایسته‌ی ریتم است",
      problemTitle: "تایم‌لاین باید مثل یک ساز باشد؛ نه یک هزارتو.",
      problemBody: "پنجره‌های تکراری، فرمان‌های پنهان، نشانه‌گذاری دستی ضرب و جابه‌جایی دائمی میان پنل‌ها، در هر پروژه ساعت‌ها زمان می‌گیرند. NikaToolFlow این کارها را در یک سطح کنترل سریع و قابل جست‌وجو کنار تایم‌لاین جمع می‌کند.",
      beforeLabel: "قبل",
      beforeText: "جست‌وجوی منو، تنظیمات تکراری و تمرکز شکسته.",
      afterLabel: "با Nika",
      afterText: "یک پنل، رفتار قابل پیش‌بینی و جریان خلاقه.",
      featuresKicker: "یک پنل برای تمام ریتم تدوین",
      featuresTitle: "برای همان لحظه‌هایی ساخته شده که تدوینگر را کند می‌کنند.",
      featuresLead: "از دریافت مدیا تا موشن، صدا و مارکرها؛ هر ابزار یک وقفه‌ی کوچک را حذف می‌کند تا جریان کار حفظ شود.",
      ytTitle: "YouTube Grab؛ مستقیم داخل تدوین.",
      ytBody: "لینک مجاز را تحلیل کنید، کیفیت را انتخاب کنید، کل ویدئو یا بازه دقیق IN/OUT را بگیرید، به فرمت امن برای پریمیر تبدیل، وارد پروژه و روی Playhead قرار دهید.",
      beatTitle: "تشخیص واقعی ضرب؛ مارکرهایی که با موسیقی حرکت می‌کنند.",
      beatBody: "BPM و ترنزینت‌ها را از یک کلیپ موسیقی انتخاب‌شده تشخیص دهید و مارکرهای Source بسازید که با جابه‌جایی کلیپ همراه می‌مانند.",
      undoTitle: "شبکه‌ی ایمنی مخصوص عملیات پنل.",
      undoBody: "Nika Undo برای ابزارهای پشتیبانی‌شده تا ۲۰ مرحله تاریخچه نگه می‌دارد و هنگام فوکوس پنل با Ctrl/Cmd+Z کار می‌کند.",
      motionTitle: "موشن دقیق روی مرز واقعی کلیپ.",
      motionBody: "زوم کامل کلیپ، Punch In، فید تصویر و صدا را با کی‌فریم‌های وابسته به Source بسازید؛ حتی روی کلیپ Trim یا Reverse شده.",
      smartTitle: "مدیا را Paste کنید، نه دردسر را.",
      smartBody: "Smart Paste فایل‌ها، تصویر Clipboard و لینک مستقیم مدیا را به Asset پایدار پروژه تبدیل می‌کند؛ نه فایل موقت و شکننده.",
      panelTitle: "هنگام کمبود فضا جمع‌وجور؛ هنگام نیاز به سرعت قابل جست‌وجو.",
      panelBody: "پنل را Dock و Resize کنید، زبان و رنگ را تغییر دهید، ابزارهای آزمایشی را پنهان کنید و هر فرمان را در چند ثانیه پیدا کنید.",
      explorerKicker: "کاوش جعبه‌ابزار",
      explorerTitle: "ابزارهای متمرکز برای تمام مراحل تدوین.",
      explorerLead: "یک دسته را انتخاب کنید و ببینید NikaToolFlow چگونه عملیات تکراری پریمیر را به گردش‌های کاری سریع و قابل پیش‌بینی تبدیل می‌کند.",
      tabQuick: "سریع",
      tabTimeline: "تایم‌لاین",
      tabMotion: "موشن",
      tabAudio: "صدا",
      tabMarkers: "مارکرها",
      flowKicker: "از وقفه تا جریان",
      flowTitle: "سه حرکت؛ یک تدوین بدون وقفه.",
      flow1Title: "فرمان را پیدا کنید",
      flow1Body: "جست‌وجو کنید، دسته را فیلتر کنید یا پنل را به‌شکل جمع‌وجور کنار تایم‌لاین نگه دارید.",
      flow2Title: "متناسب با انتخاب اجرا کنید",
      flow2Body: "NikaToolFlow انتخاب شما را می‌خواند، فقط پارامترهای ضروری را می‌پرسد و همان‌جا عمل می‌کند.",
      flow3Title: "قابل بازگشت بمانید",
      flow3Body: "عملیات پشتیبانی‌شده وارد تاریخچه ۲۰ مرحله‌ای Nika Undo می‌شوند تا آزمون و خطا امن بماند.",
      compatKicker: "نسخه CEP با نصب مستقیم",
      compatTitle: "هماهنگ با محیط‌هایی که تدوینگرها همین حالا استفاده می‌کنند.",
      compatBody: "NikaToolFlow 1.3.1 برای Premiere Pro 2020 تا 2026 روی Windows 10/11 و macOS هدف‌گذاری شده است. پیش از خرید، بیلد دقیق باید در جدول تست منتشرشده تأیید شده باشد.",
      compatNote: "ابزارهای آزمایشی مبتنی بر QE اختیاری‌اند، به‌صورت پیش‌فرض پنهان هستند و از قابلیت‌های اصلی تضمین‌شده جدا نمایش داده می‌شوند.",
      pricingKicker: "ابزار را نگه دارید؛ ریتم را هم.",
      pricingTitle: "یک پنل متمرکز برای سال‌ها تدوین سریع‌تر.",
      pricingLead: "با آزمایش هفت‌روزه شروع کنید و وقتی NikaToolFlow جای خود را در Workspace شما پیدا کرد، ارتقا دهید.",
      value1Title: "۳۵ ابزار گردش کار",
      value1Body: "سریع، تایم‌لاین، موشن، صدا، مارکر و ابزارهای کمکی.",
      value2Title: "لایسنس وابسته به دستگاه",
      value2Body: "فعال‌سازی آفلاین امضاشده برای یک سیستم دارای مجوز.",
      value3Title: "به‌روزرسانی‌های نسخه CEP",
      value3Body: "نسخه‌های نگهداری و بهبودهای نصب.",
      value4Title: "رابط فارسی و انگلیسی",
      value4Body: "زبانی را انتخاب کنید که سرعت شما را حفظ می‌کند.",
      priceFrom: "عرضه",
      priceDescription: "فروشگاه آماده است. پرداخت عمومی پس از تکمیل جدول تست نسخه‌های اعلام‌شده پریمیر و سیستم‌عامل فعال می‌شود.",
      priceButton: "درخواست دسترسی زودهنگام",
      trialButton: "شروع آزمایش ۷ روزه",
      secureText: "پرداخت امن میزبانی‌شده · تحویل دیجیتال · راهنمای فعال‌سازی",
      metaDevice: "دستگاه",
      metaTrial: "روز آزمایش",
      metaVersion: "نسخه",
      faqKicker: "پاسخ به پرسش‌ها",
      faqTitle: "هرآنچه پیش از نصب باید بدانید.",
      faqLead: "هنوز سؤال دارید؟ آدرس پشتیبانی پیش از انتشار فقط با تغییر یک خط قابل تنظیم است.",
      faq1Q: "کدام نسخه‌های پریمیر پشتیبانی می‌شوند؟",
      faq1A: "نسخه CEP برای Premiere Pro 2020 تا 2026 هدف‌گذاری شده است. چون فرمان‌های Native ممکن است با بیلد، سیستم‌عامل، فوکوس پنل و زبان رابط تغییر کنند، فقط ترکیب‌هایی که در جدول تست منتشرشده آمده‌اند باید تضمین‌شده در نظر گرفته شوند.",
      faq2Q: "آزمایش هفت‌روزه چگونه کار می‌کند؟",
      faq2A: "پکیج مشتری را نصب کنید، NikaToolFlow را از مسیر Window → Extensions باز کنید و «Start 7-day trial» را بزنید. وضعیت Trial پس از بستن و بازکردن پریمیر روی همان سیستم باقی می‌ماند.",
      faq3Q: "لایسنس خریداری‌شده چگونه فعال می‌شود؟",
      faq3A: "NikaToolFlow یک Device ID نمایش می‌دهد. فروشنده برای همان سیستم لایسنس امضاشده صادر می‌کند و شما آن را در پنجره فعال‌سازی Paste می‌کنید. نسخه فعلی اعتبارسنجی آفلاین دارد.",
      faq4Q: "آیا YouTube Grab محدودیت‌ها را دور می‌زند؟",
      faq4A: "خیر. این قابلیت فقط برای محتوایی است که مالک آن هستید، اجازه استفاده دارید یا مجاز به دانلودش هستید. DRM یا کنترل دسترسی را دور نمی‌زند.",
      faq5Q: "برای تصاویر واردشده از Clipboard چه اتفاقی می‌افتد؟",
      faq5A: "Smart Paste تصاویر Clipboard و مدیای لینک مستقیم را به‌جای پوشه موقت سیستم، در پوشه پایدار NikaToolFlow ذخیره می‌کند تا احتمال Offline شدن مدیا کاهش یابد.",
      faq6Q: "ابزارهای آزمایشی هم وجود دارند؟",
      faq6A: "ابزارهای آزمایشی اختیاری داخل محصول هستند اما به‌صورت پیش‌فرض پنهان‌اند. بعضی از QE DOM پشتیبانی‌نشده پریمیر استفاده می‌کنند و باید ابتدا روی نسخه کپی پروژه آزمایش شوند.",
      finalKicker: "اصطکاک کمتر؛ پروژه‌های تمام‌شده بیشتر",
      finalTitle: "کاری کنید پریمیر با دست‌های شما هماهنگ شود.",
      finalBody: "عملیات تکراری خود را وارد یک گردش کار دقیق، جمع‌وجور و قابل بازگشت کنید.",
      finalButton: "دریافت NikaToolFlow",
      footerTagline: "پنل حرفه‌ای گردش کار پریمیر برای تدوینگرهایی که سرعت و کنترل برایشان مهم است.",
      footerProduct: "محصول",
      footerPricing: "قیمت",
      footerSupport: "پشتیبانی",
      footerInstall: "نصب",
      footerContact: "تماس",
      footerLegal: "حقوقی",
      footerTerms: "شرایط استفاده",
      footerPrivacy: "حریم خصوصی",
      footerRefunds: "سیاست بازپرداخت",
      footerRights: "تمام حقوق محفوظ است.",
      footerAdobe: "Adobe و Premiere Pro علائم تجاری Adobe هستند. NikaToolFlow محصولی مستقل است.",
      modalBack: "بازگشت به سایت",
      statusPrelaunch: `نسخه ${config.version} · دسترسی زودهنگام`,
      statusLive: `نسخه ${config.version} · اکنون در دسترس`,
      ribbonPrelaunch: "دسترسی زودهنگام",
      ribbonLive: "آماده خرید",
      livePricePrefix: "پرداخت یک‌باره",
      livePriceDescription: "لایسنس یک‌باره برای یک سیستم، همراه آزمایش هفت‌روزه، تحویل دیجیتال و راهنمای فعال‌سازی.",
      liveBuy: "خرید NikaToolFlow",
      prelaunchPrice: "قیمت هنگام عرضه",
      modalPrelaunchKicker: "دسترسی زودهنگام",
      modalPrelaunchTitle: "NikaToolFlow در حال آماده‌شدن برای عرضه است.",
      modalPrelaunchBody: "فروشگاه و مسیر تحویل آماده‌اند. پرداخت عمومی پس از تکمیل جدول تست نسخه‌های اعلام‌شده پریمیر فعال می‌شود.",
      modalTrialTitle: "لینک عمومی نسخه آزمایشی هنوز فعال نیست.",
      modalTrialBody: "آزمایش هفت‌روزه داخل پکیج مشتری قرار دارد. برای دسترسی کنترل‌شده از دکمه تماس استفاده کنید.",
      modalContact: config.contactLabel || "تماس با @Ehsanef",
      modalConfigTitle: "درگاه پرداخت هنوز متصل نشده است.",
      modalConfigBody: "قبل از تغییر فروشگاه به حالت live، لینک پرداخت میزبانی‌شده را در site.config.js وارد کنید."
    }
  };

  const featureData = {
    en: {
      quick: {
        label: "QUICK WORKFLOW",
        icon: "↗",
        kicker: "7 focused workflows",
        title: "Get media from idea to timeline—faster.",
        body: "Smart Paste, YouTube Grab, Import Media, Insert at Playhead, Adjustment Layer, Nest, and Duplicate keep acquisition and assembly inside one panel.",
        bullets: [
          "Authorized full-video and exact clip-range acquisition",
          "Premiere-safe conversion and Project import",
          "Reusable adjustment layer placement with overwrite protection"
        ],
        tools: ["Smart Paste", "YouTube Grab", "Import Media", "Insert at Playhead", "Adjustment Layer", "Nest", "Duplicate"]
      },
      timeline: {
        label: "TIMELINE CONTROL",
        icon: "⌁",
        kicker: "Native + assisted actions",
        title: "Shape the cut without breaking your concentration.",
        body: "Clean gaps, align clips, build sequences, manage links and enable states, and open Premiere's own timing commands from one consistent surface.",
        bullets: [
          "Ripple Delete and Close Gap at the playhead",
          "Align Starts and Sequence Clips with frame gaps",
          "Link, Enable, Speed/Duration, Add Edit, and optional track moves"
        ],
        tools: ["Ripple Delete", "Close Gap", "Move Track", "Align Starts", "Sequence Clips", "Link / Unlink", "Enable / Disable", "Speed / Duration", "Add Edit"]
      },
      motion: {
        label: "MOTION SYSTEM",
        icon: "＋",
        kicker: "Source-relative keyframes",
        title: "Build useful motion—not disposable presets.",
        body: "Reset motion, set a precise static scale, or generate zooms, punch-ins, fades, and optional shake using the actual visible clip boundaries.",
        bullets: [
          "Works across trimmed and reverse-speed clips",
          "User-defined start/end scale values",
          "Previous property state retained for supported Nika Undo actions"
        ],
        tools: ["Reset Motion", "Constant Scale", "Zoom In", "Zoom Out", "Punch In", "Video Fades", "Camera Shake"]
      },
      audio: {
        label: "AUDIO CONTROL",
        icon: "−6",
        kicker: "Fast level and transition work",
        title: "Handle the common audio moves in fewer steps.",
        body: "Open Premiere's Synchronize and Audio Gain dialogs, set clip level in dB, and generate fades at the clip's real in and out points.",
        bullets: [
          "Direct access to native Synchronize and Audio Gain",
          "Precise Audio Level conversion in dB",
          "Source-relative volume keyframes for fade in and out"
        ],
        tools: ["Synchronize", "Audio Gain", "Audio Level", "Audio Fade In", "Audio Fade Out"]
      },
      markers: {
        label: "MARKERS + UTILITIES",
        icon: "◆",
        kicker: "Rhythm, labels, and output",
        title: "Turn structure into visible editorial decisions.",
        body: "Place timeline and cut markers, detect beats, keep source markers attached to music, rename batches, export frames, and inspect project context.",
        bullets: [
          "Detected BPM and confidence from one selected music clip",
          "Clear only Nika beat markers without deleting editorial markers",
          "Batch Rename, Export Frame, and Project / Selection Info"
        ],
        tools: ["Marker at Playhead", "Markers at Cuts", "Auto Beat Detect", "Source Beat Markers", "Clear Nika Beats", "Batch Rename", "Export Frame", "Project Info"]
      }
    },
    fa: {
      quick: {
        label: "گردش کار سریع",
        icon: "↗",
        kicker: "۷ گردش کار متمرکز",
        title: "مدیا را سریع‌تر از ایده به تایم‌لاین برسانید.",
        body: "Smart Paste، YouTube Grab، Import Media، Insert at Playhead، Adjustment Layer، Nest و Duplicate دریافت و چیدمان اولیه را داخل یک پنل نگه می‌دارند.",
        bullets: [
          "دریافت مجاز کل ویدئو یا بازه دقیق کلیپ",
          "تبدیل امن برای پریمیر و Import به Project",
          "قراردهی Adjustment Layer قابل استفاده مجدد، بدون Overwrite"
        ],
        tools: ["Smart Paste", "YouTube Grab", "Import Media", "Insert at Playhead", "Adjustment Layer", "Nest", "Duplicate"]
      },
      timeline: {
        label: "کنترل تایم‌لاین",
        icon: "⌁",
        kicker: "عملیات Native و کمکی",
        title: "کات را شکل دهید، بدون اینکه تمرکزتان قطع شود.",
        body: "Gapها را پاک کنید، کلیپ‌ها را هم‌تراز و پشت‌سرهم بچینید، Link و Enable را مدیریت کنید و فرمان‌های زمان‌بندی خود پریمیر را از یک سطح ثابت اجرا کنید.",
        bullets: [
          "Ripple Delete و Close Gap در محل Playhead",
          "Align Starts و Sequence Clips با فاصله فریمی",
          "Link، Enable، Speed/Duration، Add Edit و جابه‌جایی اختیاری Track"
        ],
        tools: ["Ripple Delete", "Close Gap", "Move Track", "Align Starts", "Sequence Clips", "Link / Unlink", "Enable / Disable", "Speed / Duration", "Add Edit"]
      },
      motion: {
        label: "سیستم موشن",
        icon: "＋",
        kicker: "کی‌فریم وابسته به Source",
        title: "موشن کاربردی بسازید، نه Preset مصرفی.",
        body: "Motion را Reset کنید، Scale ثابت دقیق بدهید یا Zoom، Punch In، Fade و Shake اختیاری را براساس مرز واقعی قابل‌مشاهده کلیپ بسازید.",
        bullets: [
          "عملکرد درست روی کلیپ‌های Trim و Reverse شده",
          "مقادیر Scale ابتدا و انتها به انتخاب کاربر",
          "حفظ وضعیت قبلی Property برای عملیات پشتیبانی‌شده Nika Undo"
        ],
        tools: ["Reset Motion", "Constant Scale", "Zoom In", "Zoom Out", "Punch In", "Video Fades", "Camera Shake"]
      },
      audio: {
        label: "کنترل صدا",
        icon: "−6",
        kicker: "تنظیم سریع سطح و گذار",
        title: "حرکت‌های رایج صدا را با مراحل کمتر انجام دهید.",
        body: "پنجره‌های Synchronize و Audio Gain خود پریمیر را باز کنید، سطح کلیپ را با dB تنظیم کنید و روی In/Out واقعی کلیپ فید بسازید.",
        bullets: [
          "دسترسی مستقیم به Synchronize و Audio Gain پریمیر",
          "تبدیل دقیق Audio Level برحسب dB",
          "کی‌فریم Volume وابسته به Source برای Fade In و Fade Out"
        ],
        tools: ["Synchronize", "Audio Gain", "Audio Level", "Audio Fade In", "Audio Fade Out"]
      },
      markers: {
        label: "مارکرها و ابزارهای کمکی",
        icon: "◆",
        kicker: "ریتم، نام‌گذاری و خروجی",
        title: "ساختار را به تصمیم‌های قابل‌دیدن تدوینی تبدیل کنید.",
        body: "مارکر تایم‌لاین و کات بسازید، ضرب‌ها را تشخیص دهید، Source Marker را همراه موسیقی نگه دارید، گروهی Rename کنید، Frame خروجی بگیرید و اطلاعات پروژه را ببینید.",
        bullets: [
          "تشخیص BPM و Confidence از یک کلیپ موسیقی انتخاب‌شده",
          "حذف فقط مارکرهای Nika بدون پاک‌شدن مارکرهای تدوینگر",
          "Batch Rename، Export Frame و Project / Selection Info"
        ],
        tools: ["Marker at Playhead", "Markers at Cuts", "Auto Beat Detect", "Source Beat Markers", "Clear Nika Beats", "Batch Rename", "Export Frame", "Project Info"]
      }
    }
  };

  const state = {
    language: getInitialLanguage(),
    feature: "quick",
    lastScrollY: window.scrollY,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  };

  function safeStorageGet(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  }

  function safeStorageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* Storage may be unavailable in private or embedded contexts. */ }
  }

  function getInitialLanguage() {
    const saved = safeStorageGet("ntf-language");
    if (saved === "en" || saved === "fa") return saved;
    return config.defaultLanguage === "fa" ? "fa" : "en";
  }

  function validUrl(value) {
    if (!value || typeof value !== "string") return false;
    if (/YOUR_|example\.com|replace/i.test(value)) return false;
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:", "mailto:"].includes(url.protocol);
    } catch {
      return false;
    }
  }

  function setLanguage(language, persist = true) {
    const lang = language === "fa" ? "fa" : "en";
    state.language = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = lang === "fa"
      ? "NikaToolFlow — شتاب‌دهنده گردش کار Premiere Pro"
      : "NikaToolFlow — Premiere Pro Workflow Accelerator";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[lang][key] !== undefined) {
        element.textContent = translations[lang][key];
      }
    });

    const toggle = document.querySelector("[data-language]");
    if (toggle) {
      toggle.innerHTML = lang === "en"
        ? '<span class="lang-active">EN</span><span class="lang-divider">/</span><span>FA</span>'
        : '<span>EN</span><span class="lang-divider">/</span><span class="lang-active">FA</span>';
      toggle.setAttribute("aria-label", lang === "fa" ? "تغییر زبان به انگلیسی" : "Switch language to Persian");
    }

    updateCommerce();
    renderFeature(state.feature, false);
    updateSupportLinks();

    if (persist) safeStorageSet("ntf-language", lang);
    document.dispatchEvent(new CustomEvent("ntf:language", { detail: { language: lang } }));
  }

  function updateCommerce() {
    const t = translations[state.language];
    const isLive = config.status === "live";
    const statusLabel = document.querySelector("[data-status-label]");
    const ribbon = document.querySelector("[data-status-ribbon]");
    const price = document.querySelector("[data-price]");
    const compare = document.querySelector("[data-compare-price]");
    const pricePrefix = document.querySelector("[data-i18n='priceFrom']");
    const description = document.querySelector("[data-i18n='priceDescription']");
    const purchase = document.querySelector("[data-action='purchase']");

    if (statusLabel) statusLabel.textContent = isLive ? t.statusLive : t.statusPrelaunch;
    if (ribbon) ribbon.textContent = isLive ? t.ribbonLive : t.ribbonPrelaunch;
    if (pricePrefix) pricePrefix.textContent = isLive ? t.livePricePrefix : t.priceFrom;
    if (description) description.textContent = isLive ? t.livePriceDescription : t.priceDescription;
    if (purchase) purchase.textContent = isLive ? t.liveBuy : t.priceButton;

    if (price) {
      price.textContent = isLive && config.displayPrice ? config.displayPrice : t.prelaunchPrice;
    }

    if (compare) {
      const showCompare = isLive && Boolean(config.compareAtPrice);
      compare.hidden = !showCompare;
      compare.textContent = showCompare ? config.compareAtPrice : "";
    }
  }

  function updateSupportLinks() {
    const supportEmail = config.supportEmail || "";
    document.querySelectorAll("a[href='legal.html#support']").forEach((link) => {
      link.dataset.supportEmail = supportEmail;
    });
  }

  function renderFeature(feature, animate = true) {
    const data = featureData[state.language][feature] || featureData[state.language].quick;
    const content = document.querySelector("[data-feature-content]");
    const label = document.querySelector("[data-feature-label]");
    const tools = document.querySelector("[data-feature-tools]");
    if (!content || !label || !tools) return;

    const apply = () => {
      label.textContent = data.label;
      content.innerHTML = `
        <div class="stage-icon" aria-hidden="true">${data.icon}</div>
        <span class="stage-kicker">${data.kicker}</span>
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        <ul>${data.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
      tools.innerHTML = data.tools.map((tool) => `<span>${tool}</span>`).join("");
      content.classList.remove("is-changing");
    };

    if (animate && !state.reducedMotion) {
      content.classList.add("is-changing");
      window.setTimeout(apply, 180);
    } else {
      apply();
    }

    document.querySelectorAll("[data-feature-tab]").forEach((button) => {
      const active = button.dataset.featureTab === feature;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
  }

  function configureFeatureTabs() {
    const tabs = [...document.querySelectorAll("[data-feature-tab]")];
    tabs.forEach((button, index) => {
      button.addEventListener("click", () => {
        state.feature = button.dataset.featureTab;
        renderFeature(state.feature);
      });

      button.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let next = index;
        const forward = state.language === "fa" ? "ArrowLeft" : "ArrowRight";
        const backward = state.language === "fa" ? "ArrowRight" : "ArrowLeft";
        if (event.key === forward || event.key === "ArrowDown") next = (index + 1) % tabs.length;
        if (event.key === backward || event.key === "ArrowUp") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        tabs[next].focus();
        tabs[next].click();
      });
    });
  }

  function openModal(kind) {
    const modal = document.querySelector("[data-action-modal]");
    if (!modal) return;
    const t = translations[state.language];
    const kicker = modal.querySelector("[data-modal-kicker]");
    const title = modal.querySelector("[data-modal-title]");
    const body = modal.querySelector("[data-modal-body]");
    const primary = modal.querySelector("[data-modal-primary]");

    kicker.textContent = t.modalPrelaunchKicker;
    if (kind === "trial") {
      title.textContent = t.modalTrialTitle;
      body.textContent = t.modalTrialBody;
    } else if (config.status === "live") {
      title.textContent = t.modalConfigTitle;
      body.textContent = t.modalConfigBody;
    } else {
      title.textContent = t.modalPrelaunchTitle;
      body.textContent = t.modalPrelaunchBody;
    }

    if (validUrl(config.contactUrl)) {
      primary.hidden = false;
      primary.textContent = t.modalContact;
      primary.href = config.contactUrl;
      if (/^https?:/i.test(config.contactUrl)) {
        primary.target = "_blank";
        primary.rel = "noopener noreferrer";
      } else {
        primary.removeAttribute("target");
        primary.removeAttribute("rel");
      }
    } else {
      primary.hidden = true;
    }

    if (typeof modal.showModal === "function") {
      if (!modal.open) modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }

  function closeModal() {
    const modal = document.querySelector("[data-action-modal]");
    if (!modal) return;
    if (typeof modal.close === "function" && modal.open) modal.close();
    else modal.removeAttribute("open");
  }

  function configureActions() {
    document.querySelectorAll("[data-action='purchase']").forEach((button) => {
      button.addEventListener("click", () => {
        if (config.status === "live" && validUrl(config.checkoutUrl)) {
          window.location.assign(config.checkoutUrl);
        } else {
          openModal("purchase");
        }
      });
    });

    document.querySelectorAll("[data-action='trial']").forEach((button) => {
      button.addEventListener("click", () => {
        if (validUrl(config.trialUrl)) {
          window.location.assign(config.trialUrl);
        } else {
          openModal("trial");
        }
      });
    });

    document.querySelectorAll("[data-action='primary']").forEach((link) => {
      link.setAttribute("href", "#pricing");
    });

    document.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    const modal = document.querySelector("[data-action-modal]");
    if (modal) {
      modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();
        const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
        if (!inside) closeModal();
      });
      modal.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeModal();
      });
    }
  }

  function configureLanguageToggle() {
    const toggle = document.querySelector("[data-language]");
    if (!toggle) return;
    toggle.addEventListener("click", () => setLanguage(state.language === "en" ? "fa" : "en"));
  }

  function configureMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      menu.hidden = !open;
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) setOpen(false);
    }, { passive: true });
  }

  function configureSmoothScroll() {
    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: state.reducedMotion ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", id);
      });
    });

    document.querySelectorAll("[data-scroll-demo]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelector("#features")?.scrollIntoView({ behavior: state.reducedMotion ? "auto" : "smooth" });
      });
    });
  }

  function configureHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 18);
      const movingDown = y > state.lastScrollY && y > 420;
      const menuOpen = document.querySelector("[data-menu-toggle]")?.getAttribute("aria-expanded") === "true";
      header.classList.toggle("is-hidden", movingDown && !menuOpen);
      state.lastScrollY = y;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  function configureReveal() {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (state.reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = entry.target.parentElement?.querySelectorAll(":scope > [data-reveal]") || [];
        const index = [...siblings].indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.max(0, index) * 60}ms`;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -55px" });

    elements.forEach((element) => observer.observe(element));
  }

  function configureCounters() {
    const counters = [...document.querySelectorAll("[data-count]")];
    if (!counters.length) return;

    const animate = (element) => {
      const target = Number(element.dataset.count || 0);
      if (!Number.isFinite(target)) return;
      if (state.reducedMotion) {
        element.textContent = String(target);
        return;
      }
      const start = performance.now();
      const duration = 1050;
      const frame = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));
        if (progress < 1) window.requestAnimationFrame(frame);
      };
      window.requestAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: .6 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function configureTilts() {
    if (state.reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      const strength = card.classList.contains("hero-product") ? 3.5 : 2.4;
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * strength;
        const ry = (x - 0.5) * strength;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
        card.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  function configureMagneticButtons() {
    if (state.reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${x * .12}px, ${y * .16}px)`;
      });
      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }

  function configureCursorLight() {
    const light = document.querySelector(".cursor-light");
    if (!light || state.reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let x = window.innerWidth * .5;
    let y = window.innerHeight * .3;
    let tx = x;
    let ty = y;
    document.addEventListener("pointermove", (event) => {
      tx = event.clientX;
      ty = event.clientY;
    }, { passive: true });
    const update = () => {
      x += (tx - x) * .11;
      y += (ty - y) * .11;
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
      window.requestAnimationFrame(update);
    };
    update();
  }

  function configureAmbientCanvas() {
    const canvas = document.querySelector("#ambientCanvas");
    if (!canvas || state.reducedMotion) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let animationFrame = 0;

    const build = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(56, Math.max(22, Math.round((width * height) / 36000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + .25,
        speed: Math.random() * .12 + .035,
        drift: (Math.random() - .5) * .06,
        phase: Math.random() * Math.PI * 2,
        cyan: index % 5 === 0
      }));
    };

    const draw = (time) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.x += particle.drift;
        if (particle.y < -6) {
          particle.y = height + 6;
          particle.x = Math.random() * width;
        }
        if (particle.x < -6) particle.x = width + 6;
        if (particle.x > width + 6) particle.x = -6;
        const alpha = .13 + Math.sin(time * .0006 + particle.phase) * .08;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.cyan ? `rgba(64, 226, 242, ${alpha})` : `rgba(154, 107, 255, ${alpha})`;
        context.fill();
      });
      animationFrame = window.requestAnimationFrame(draw);
    };

    build();
    draw(0);
    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 140);
    }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) window.cancelAnimationFrame(animationFrame);
      else animationFrame = window.requestAnimationFrame(draw);
    });
  }

  function configureActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    const links = [...document.querySelectorAll(".desktop-nav a")];
    const map = new Map(links.map((link) => [link.getAttribute("href")?.slice(1), link]));
    const sections = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("is-active", link === map.get(visible.target.id)));
    }, { rootMargin: "-30% 0px -55%", threshold: [0, .2, .6] });
    sections.forEach((section) => observer.observe(section));
  }

  function configureFaq() {
    const details = [...document.querySelectorAll(".faq-list details")];
    details.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        details.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  function configureFooter() {
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function init() {
    configureLanguageToggle();
    configureMenu();
    configureFeatureTabs();
    configureActions();
    configureSmoothScroll();
    configureHeader();
    configureReveal();
    configureCounters();
    configureTilts();
    configureMagneticButtons();
    configureCursorLight();
    configureAmbientCanvas();
    configureActiveNav();
    configureFaq();
    configureFooter();
    setLanguage(state.language, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

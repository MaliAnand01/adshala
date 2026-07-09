// src/data/inner-data/CourseToolsData.ts
// ─────────────────────────────────────────────────────────────────────────────
// Per-course tool data for the animated tools slider on enquiry pages.
// Keyed by the `overview` field from InnerCourseData.ts (unique per course).
// Each entry has exactly 2 rows shown on all screen sizes.
// ─────────────────────────────────────────────────────────────────────────────

export interface ToolItem {
  name: string;
  icon: string; // Font Awesome class e.g. "fab fa-google"
}

export interface CourseTool {
  row1: ToolItem[];
  row2: ToolItem[];
}

export const COURSE_TOOLS: Record<string, CourseTool> = {

  // ── 1. Digital Marketing & AI ──────────────────────────────────────────────
  "certification-in-advanced-digital-marketing-&-ai": {
    row1: [
      { name: "Google Ads",      icon: "fab fa-google" },
      { name: "Facebook Ads",    icon: "fab fa-facebook-square" },
      { name: "Instagram",       icon: "fab fa-instagram" },
      { name: "SEMrush",         icon: "fas fa-chart-bar" },
      { name: "Mailchimp",       icon: "fab fa-mailchimp" },
      { name: "WordPress",       icon: "fab fa-wordpress" },
      { name: "Canva",           icon: "fas fa-palette" },
      { name: "ChatGPT AI",      icon: "fas fa-robot" },
    ],
    row2: [
      { name: "Google Analytics", icon: "fas fa-chart-line" },
      { name: "YouTube",          icon: "fab fa-youtube" },
      { name: "LinkedIn",         icon: "fab fa-linkedin" },
      { name: "WhatsApp",         icon: "fab fa-whatsapp" },
      { name: "Hootsuite",        icon: "fas fa-paper-plane" },
      { name: "HubSpot",          icon: "fas fa-bullseye" },
      { name: "Shopify",          icon: "fab fa-shopify" },
      { name: "Ahrefs",           icon: "fas fa-search-plus" },
    ],
  },

  // ── 2. Graphic Design & AI ─────────────────────────────────────────────────
  "certification-in-advanced-graphic-design-&-ai": {
    row1: [
      { name: "Photoshop",       icon: "fas fa-image" },
      { name: "Illustrator",     icon: "fas fa-pen-nib" },
      { name: "InDesign",        icon: "fas fa-file-alt" },
      { name: "Figma",           icon: "fab fa-figma" },
      { name: "Canva",           icon: "fas fa-palette" },
      { name: "After Effects",   icon: "fas fa-film" },
      { name: "CorelDRAW",       icon: "fas fa-draw-polygon" },
      { name: "Lightroom",       icon: "fas fa-sun" },
    ],
    row2: [
      { name: "ChatGPT AI",       icon: "fas fa-robot" },
      { name: "Midjourney",       icon: "fas fa-magic" },
      { name: "Premiere Pro",     icon: "fas fa-video" },
      { name: "DaVinci Resolve",  icon: "fas fa-sliders-h" },
      { name: "Procreate",        icon: "fas fa-pencil-alt" },
      { name: "Sketch",           icon: "fas fa-vector-square" },
      { name: "Stable Diffusion", icon: "fas fa-brain" },
      { name: "Blender",          icon: "fas fa-cube" },
    ],
  },

  // ── 3. Social Media Management ─────────────────────────────────────────────
  "mastery-in-social-media-management": {
    row1: [
      { name: "Instagram",           icon: "fab fa-instagram" },
      { name: "Facebook",            icon: "fab fa-facebook-square" },
      { name: "LinkedIn",            icon: "fab fa-linkedin" },
      { name: "YouTube",             icon: "fab fa-youtube" },
      { name: "Pinterest",           icon: "fab fa-pinterest" },
      { name: "Canva",               icon: "fas fa-palette" },
      { name: "Hootsuite",           icon: "fas fa-paper-plane" },
      { name: "TikTok",              icon: "fab fa-tiktok" },
    ],
    row2: [
      { name: "Buffer",              icon: "fas fa-clock" },
      { name: "Meta Business Suite", icon: "fab fa-facebook" },
      { name: "Sprout Social",       icon: "fas fa-leaf" },
      { name: "ChatGPT AI",          icon: "fas fa-robot" },
      { name: "CapCut",              icon: "fas fa-cut" },
      { name: "Later",               icon: "fas fa-calendar-alt" },
      { name: "WhatsApp Business",   icon: "fab fa-whatsapp" },
      { name: "Twitter / X",         icon: "fab fa-twitter" },
    ],
  },

  // ── 4. Marketplace Specialist ──────────────────────────────────────────────
  "marketplace-certification": {
    row1: [
      { name: "Amazon Seller",   icon: "fab fa-amazon" },
      { name: "Flipkart",        icon: "fas fa-store" },
      { name: "Meesho",          icon: "fas fa-tags" },
      { name: "Myntra",          icon: "fas fa-tshirt" },
      { name: "Snapdeal",        icon: "fas fa-bolt" },
      { name: "Shiprocket",      icon: "fas fa-shipping-fast" },
      { name: "Jungle Scout",    icon: "fas fa-binoculars" },
      { name: "Helium 10",       icon: "fas fa-rocket" },
    ],
    row2: [
      { name: "A+ Content",       icon: "fas fa-star" },
      { name: "Google Ads",       icon: "fab fa-google" },
      { name: "Facebook Ads",     icon: "fab fa-facebook-square" },
      { name: "ChatGPT AI",       icon: "fas fa-robot" },
      { name: "Canva",            icon: "fas fa-palette" },
      { name: "Sellerboard",      icon: "fas fa-chart-bar" },
      { name: "WooCommerce",      icon: "fas fa-shopping-cart" },
      { name: "Catalog Manager",  icon: "fas fa-list-alt" },
    ],
  },

  // ── 5. SEO Certification ───────────────────────────────────────────────────
  "seo-certification": {
    row1: [
      { name: "Google Search Console", icon: "fab fa-google" },
      { name: "Ahrefs",                icon: "fas fa-search-plus" },
      { name: "SEMrush",               icon: "fas fa-chart-bar" },
      { name: "Moz Pro",               icon: "fas fa-chart-area" },
      { name: "Screaming Frog",        icon: "fas fa-spider" },
      { name: "Google Analytics",      icon: "fas fa-chart-line" },
      { name: "Ubersuggest",           icon: "fas fa-lightbulb" },
      { name: "Yoast SEO",             icon: "fas fa-check-circle" },
    ],
    row2: [
      { name: "ChatGPT AI",        icon: "fas fa-robot" },
      { name: "Surfer SEO",        icon: "fas fa-water" },
      { name: "Majestic",          icon: "fas fa-crown" },
      { name: "BuzzSumo",          icon: "fas fa-fire" },
      { name: "Rank Math",         icon: "fas fa-trophy" },
      { name: "Answer the Public", icon: "fas fa-question-circle" },
      { name: "SE Ranking",        icon: "fas fa-sort-amount-up" },
      { name: "PageSpeed Insights",icon: "fas fa-tachometer-alt" },
    ],
  },

  // ── 6. Web Development ────────────────────────────────────────────────────
  "certification-in-web-development": {
    row1: [
      { name: "WordPress",    icon: "fab fa-wordpress" },
      { name: "Shopify",      icon: "fab fa-shopify" },
      { name: "Elementor",    icon: "fas fa-crop" },
      { name: "WooCommerce",  icon: "fas fa-shopping-cart" },
      { name: "HTML5",        icon: "fab fa-html5" },
      { name: "CSS3",         icon: "fab fa-css3-alt" },
      { name: "JavaScript",   icon: "fab fa-js" },
      { name: "GitHub",       icon: "fab fa-github" },
    ],
    row2: [
      { name: "Figma",           icon: "fab fa-figma" },
      { name: "ChatGPT AI",      icon: "fas fa-robot" },
      { name: "Google Analytics",icon: "fas fa-chart-line" },
      { name: "Canva",           icon: "fas fa-palette" },
      { name: "Ahrefs SEO",      icon: "fas fa-search-plus" },
      { name: "Mailchimp",       icon: "fab fa-mailchimp" },
      { name: "Stripe",          icon: "fab fa-stripe" },
      { name: "PageSpeed",       icon: "fas fa-tachometer-alt" },
    ],
  },
};

// ── Home Page Tools (comprehensive showcase of all technologies) ───────────
export const HOME_PAGE_TOOLS: CourseTool = {
  row1: [
    { name: "Google Ads",      icon: "fab fa-google" },
    { name: "Facebook Ads",    icon: "fab fa-facebook-square" },
    { name: "Instagram",       icon: "fab fa-instagram" },
    { name: "YouTube",         icon: "fab fa-youtube" },
    { name: "WordPress",       icon: "fab fa-wordpress" },
    { name: "Shopify",         icon: "fab fa-shopify" },
    { name: "ChatGPT AI",      icon: "fas fa-robot" },
    { name: "Photoshop",       icon: "fas fa-image" },
    { name: "Figma",           icon: "fab fa-figma" },
    { name: "HTML5",           icon: "fab fa-html5" },
    { name: "Amazon Seller",   icon: "fab fa-amazon" },
    { name: "SEMrush",         icon: "fas fa-chart-bar" },
  ],
  row2: [
    { name: "Google Analytics", icon: "fas fa-chart-line" },
    { name: "LinkedIn",         icon: "fab fa-linkedin" },
    { name: "Canva",            icon: "fas fa-palette" },
    { name: "Illustrator",     icon: "fas fa-pen-nib" },
    { name: "CSS3",            icon: "fab fa-css3-alt" },
    { name: "JavaScript",      icon: "fab fa-js" },
    { name: "Ahrefs",          icon: "fas fa-search-plus" },
    { name: "Midjourney",      icon: "fas fa-magic" },
    { name: "WhatsApp",        icon: "fab fa-whatsapp" },
    { name: "Mailchimp",       icon: "fab fa-mailchimp" },
    { name: "GitHub",          icon: "fab fa-github" },
    { name: "HubSpot",         icon: "fas fa-bullseye" },
  ],
};

// Fallback for courses without specific tools data
export const DEFAULT_TOOLS: CourseTool = {
  row1: [
    { name: "Google Ads",   icon: "fab fa-google" },
    { name: "Facebook Ads", icon: "fab fa-facebook-square" },
    { name: "Canva",        icon: "fas fa-palette" },
    { name: "ChatGPT AI",   icon: "fas fa-robot" },
    { name: "WordPress",    icon: "fab fa-wordpress" },
    { name: "Instagram",    icon: "fab fa-instagram" },
    { name: "Analytics",    icon: "fas fa-chart-line" },
    { name: "Figma",        icon: "fab fa-figma" },
  ],
  row2: [
    { name: "LinkedIn",     icon: "fab fa-linkedin" },
    { name: "YouTube",      icon: "fab fa-youtube" },
    { name: "WhatsApp",     icon: "fab fa-whatsapp" },
    { name: "SEMrush",      icon: "fas fa-chart-bar" },
    { name: "HubSpot",      icon: "fas fa-bullseye" },
    { name: "Shopify",      icon: "fab fa-shopify" },
    { name: "Ahrefs",       icon: "fas fa-search-plus" },
    { name: "Mailchimp",    icon: "fab fa-mailchimp" },
  ],
};

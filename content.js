/*
VISIONERING — EDIT HERE
Change the business information and colors below. Do not change index.html unless you want to change the design.
*/

const SITE_CONTENT = {
  company: "VISIONERING",
  category: "MARKETING & ADVERTISING",
  tagline: "SEE IT. BUILD IT. GROW IT.",
  heroTitle: "Make your brand",
  heroHighlight: "impossible to ignore.",
  heroText: "Visionering helps businesses turn ideas into attention, attention into customers, and customers into growth.",
  email: "visionearingmarketing@gmail.com",

  // Main website colors — easy to change
  colors: {
    background: "#07030f",
    panel: "#12091f",
    text: "#ffffff",
    muted: "#b8abc9",
    primary: "#8b5cf6",
    secondary: "#22d3ee",
    accent: "#ec4899",
    line: "rgba(255,255,255,.12)"
  },

  services: [
    { icon: "✦", title: "Brand Strategy", text: "Build a clear identity and message that people remember.", page: "brand-strategy.html" },
    { icon: "◉", title: "Social Media", text: "Create content that gets attention and keeps your brand active.", page: "social-media.html" },
    { icon: "↗", title: "Advertising", text: "Turn strong creative into campaigns designed to drive action.", page: "advertising.html" },
    { icon: "⌁", title: "Content Creation", text: "Photos, graphics, video, and copy made around your brand.", page: "content-creation.html" },
    { icon: "◎", title: "Web Design", text: "Modern websites that look sharp and make it easy to take the next step.", page: "web-design.html" },
    { icon: "⚡", title: "Growth Ideas", text: "Find practical ways to get more attention, leads, and customers.", page: "growth-ideas.html" }
  ],

  bundles: [
    {
      name: "1",
      title: "Starter",
      price: "$150",
      description: "A simple starting point to build your brand and get your marketing moving.",
      items: ["Brand profile setup", "5 social media posts", "Basic marketing ideas"],
      featured: false
    },
    {
      name: "2",
      title: "Growth",
      price: "$300",
      description: "More content and support to help your brand grow.",
      items: ["Everything in Starter", "10 social media posts", "Custom graphics", "Basic ad campaign setup"],
      featured: true
    },
    {
      name: "3",
      title: "Premium",
      price: "$500",
      description: "A complete package for ongoing content, advertising, and growth planning.",
      items: ["Everything in Growth", "20 social media posts", "Website improvements", "Advertising + campaign planning", "Monthly growth ideas"],
      featured: false
    }
  ],

  merchAddOn: {
    title: "Merch Add-On",
    price: "$175",
    description: "Add custom merch design and basic merch setup to your Visionering package.",
    items: ["Custom merch design", "Merch graphics", "Basic merch setup"]
  },

  about: "Visionering is built around one simple idea: good marketing should get noticed and actually move people to action. Our goal is to help brands look better, communicate clearly, and grow.",

  process: [
    { title: "Discover", text: "We learn what you are trying to build and who you are trying to reach." },
    { title: "Create", text: "We turn the idea into a clear brand, campaign, or piece of content." },
    { title: "Launch", text: "We put it in front of the right people and make it easy for them to respond." },
    { title: "Grow", text: "We improve what works and keep looking for the next opportunity." }
  ],

  contactTitle: "Ready to make some noise?",
  contactText: "Tell us what you are building and what you want to accomplish."
};

window.SITE_CONTENT = SITE_CONTENT;

// Make the supplied Visionering logo stand out on the colorful site.
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .brand img,
    .hero-card img {
      mix-blend-mode: screen !important;
      background: transparent !important;
      filter: brightness(1.12) saturate(1.12) drop-shadow(0 0 22px rgba(37,217,255,.28)) !important;
    }
    .hero-card {
      background: linear-gradient(135deg, rgba(25,61,115,.96), rgba(55,25,105,.94), rgba(15,90,120,.92)) !important;
    }
    .hero-card img {
      padding: 8px;
    }
  `;
  document.head.appendChild(style);
});
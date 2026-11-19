import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Naz Bakez",
  tagline: "Halal custom cakes, cupcakes, trifles and cheesecakes in Scarborough.",
  category: "Custom cakes and desserts",
  schemaType: "Bakery",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://naz-bakez-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#f8809b" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Halal desserts in Scarborough",
    headline: "Fun, tasty custom cakes, made with love",
    subhead: "Naz Bakez bakes halal custom cakes, cupcakes, trifles and cheesecakes in Scarborough, Toronto. The kitchen is food handler certified. Recent work has included Encanto, Spider-Man, Kuromi, My Melody and Chanel inspired cakes. Send an Instagram message to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "An Encanto themed cake with a casita and butterflies from Naz Bakez", width: 1080, height: 1080 },
      { src: "/images/post-9.jpg", alt: "A Chanel inspired cake with a handmade fondant shopping bag from Naz Bakez", width: 640, height: 1136 },
      { src: "/images/post-6.jpg", alt: "A white birthday cake with a red heart, gold flowers and roses from Naz Bakez", width: 1080, height: 1080 },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Halal desserts",
    "Food handler certified",
    "Custom themed cakes in Scarborough",
    "Cupcakes, trifles and cheesecakes",
  ],

  about: {
    title: "Welcome to Naz Bakez",
    body: [
      "Naz Bakez is a Scarborough baker of halal custom cakes, cupcakes, trifles and cheesecakes. The kitchen is food handler certified. Recent work has included an Encanto themed cake, a Spider-Man birthday cake, a two-tier butterfly garden cake for a first birthday, a Kuromi inspired cake with pink macarons, a My Melody birthday cake, a Chanel inspired cake with a handmade fondant shopping bag, and a Pikachu cake.",
      "Send an Instagram message to order a custom celebration cake.",
    ],
    image: { src: "/images/post-1.jpg", alt: "An Encanto themed cake with a casita and butterflies from Naz Bakez", width: 1080, height: 1080 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message for a quote on your date and design.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom themed birthday cakes", description: "Posted work has included Encanto, Spider-Man, Kuromi, My Melody, Chanel inspired and Pikachu cakes." },
        ],
      },
      {
        title: "Other desserts",
        items: [
          { name: "Cupcakes" },
          { name: "Trifles" },
          { name: "Cheesecakes" },
        ],
      },
    ],
    footnote: "All desserts are halal. The kitchen is food handler certified.",
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "An Encanto themed cake with a casita and butterflies from Naz Bakez", caption: "An Encanto themed cake", href: "https://www.instagram.com/p/DfyMoCnEU7h/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A Spider-Man birthday cake from Naz Bakez", caption: "A Spider-Man cake", href: "https://www.instagram.com/p/Dfngk2KFcuN/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "A white birthday cake with a red heart, gold flowers and roses from Naz Bakez", caption: "A heart cake with roses", href: "https://www.instagram.com/p/DfQ5pImEbus/" },
      { src: "/images/post-9.jpg", width: 640, height: 1136, alt: "A Chanel inspired cake with a handmade fondant shopping bag from Naz Bakez", caption: "A Chanel inspired cake", href: "https://www.instagram.com/reel/De9nNuoxWMS/" },
      { src: "/images/post-5.jpg", width: 640, height: 1136, alt: "A two-tier pastel butterfly garden first birthday cake from Naz Bakez", caption: "A butterfly garden cake", href: "https://www.instagram.com/reel/DfdLv4mOCBj/" },
      { src: "/images/post-7.jpg", width: 640, height: 1136, alt: "A Kuromi inspired birthday cake with pink macarons from Naz Bakez", caption: "A Kuromi inspired cake", href: "https://www.instagram.com/reel/DfLKKh1BocJ/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "naz.bakez",
    embeds: ["https://www.instagram.com/p/DfyMoCnEU7h/", "https://www.instagram.com/p/Dfngk2KFcuN/", "https://www.instagram.com/reel/De9nNuoxWMS/"],
  },

  order: {
    label: "How to order",
    title: "Order by Instagram DM",
    intro: "Send an Instagram message to order a custom cake or dessert. Naz Bakez is based in Scarborough, Toronto.",
    dmMessage: "Hi Naz Bakez! I would like to order.\nDate needed:\nCake or dessert:\nTheme or flavour:",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/naz.bakez" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message to order a custom cake or dessert." },
    { q: "Are the desserts halal?", a: "Yes. Naz Bakez posts that the desserts are halal, and that the kitchen is food handler certified." },
    { q: "Where are you based?", a: "Naz Bakez is based in Scarborough, Toronto." },
  ],

  contact: {
    title: "Contact",
    area: "Scarborough, Toronto, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/naz.bakez/" },
    ],
  },

  seo: {
    title: "Naz Bakez | Halal custom cakes in Scarborough",
    description: "Halal custom cakes, cupcakes, trifles and cheesecakes in Scarborough, Toronto. Food handler certified. Order by Instagram DM.",
    keywords: ["Naz Bakez", "halal cakes Scarborough", "custom cakes Toronto", "Scarborough baker"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

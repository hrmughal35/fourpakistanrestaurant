/** Verified working Unsplash IDs (broken photo IDs removed) */
const u = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

export const IMAGES = {
  burgerClassic: u("1568901346375-23c9450c58cd"),
  burgerGourmet: u("1550547660-d9450f859349"),
  burgerStack: u("1571091718767-18b5b1457add"),
  burgerCheese: u("1594212699903-ec8a3eca50f5"),
  burgerSesame: u("1586190848861-99aa4a171e90"),
  burgerTable: u("1551782450-a2132b4ba21d"),
  foodSpread: u("1504674900247-0877df9cc836"),
  friesPlate: u("1467003909585-2f8a72700288"),
} as const;

export const BRAND = {
  name: "FOUR",
  tagline: "Not Just Burgers. An Obsession.",
  subtagline: "Lahore's Most Loved Premium Burger Experience",
  city: "Lahore",
  country: "Pakistan",
  logoUrl:
    "https://lh3.googleusercontent.com/a-/ALV-UjXCZtpea0r6-hQ5pgOm9C7F4z7PxJhd_KVW-Xm3cYPPSVg9vlg=w200-h200-p-rp-mo-br100",
  colors: {
    black: "#0B0B0B",
    burgundy: "#4B0F19",
    gold: "#D4AF37",
    white: "#FAF8F5",
  },
  social: {
    instagram: "https://instagram.com",
    foodpanda: "https://www.foodpanda.pk",
    whatsapp: "https://wa.me/923001234567",
  },
  stats: {
    reviews: 5000,
    rating: 4.6,
  },
} as const;

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3209663/3209663-uhd_2560_1440_25fps.mp4";

export const STORY_TIMELINE = [
  {
    year: "2018",
    title: "The First Flame",
    body: "A single grill in Lahore. One promise: never compromise on the patty.",
    image: u("1568901346375-23c9450c58cd", 800),
  },
  {
    year: "2020",
    title: "Craft Over Speed",
    body: "We slowed down service to speed up flavor. Premium became our default.",
    image: u("1550547660-d9450f859349", 800),
  },
  {
    year: "2023",
    title: "Citywide Craving",
    body: "Branches across Lahore. Lines out the door. Burgers worth the wait.",
    image: u("1571091718767-18b5b1457add", 800),
  },
  {
    year: "2026",
    title: "Global Standard",
    body: "International ingredients. Local soul. FOUR is Lahore's luxury burger icon.",
    image: u("1594212699903-ec8a3eca50f5", 800),
  },
] as const;

export const SIGNATURE_BURGERS = [
  {
    id: "obsidian",
    name: "Obsidian Prime",
    description:
      "Double smashed wagyu-blend patty, truffle aioli, aged cheddar, charcoal bun.",
    calories: 890,
    ingredients: ["Wagyu Blend", "Truffle Aioli", "Aged Cheddar", "Charcoal Bun"],
    price: 1890,
    image: IMAGES.burgerClassic,
    badge: "Signature",
  },
  {
    id: "gold-standard",
    name: "Gold Standard",
    description:
      "Crispy halal chicken, gold-leaf glaze sauce, pickled slaw, brioche crown.",
    calories: 720,
    ingredients: ["Crispy Chicken", "Gold Glaze", "Pickled Slaw", "Brioche"],
    price: 1490,
    image: IMAGES.burgerStack,
    badge: "Bestseller",
  },
  {
    id: "midnight",
    name: "Midnight Melt",
    description:
      "Four-cheese cascade, caramelized onions, secret midnight sauce, butter-toasted bun.",
    calories: 810,
    ingredients: ["Four Cheese", "Caramelized Onion", "Midnight Sauce"],
    price: 1690,
    image: IMAGES.burgerSesame,
    badge: "Chef's Pick",
  },
  {
    id: "velvet",
    name: "Velvet Smoke",
    description:
      "Smoked brisket patty, velvet BBQ reduction, crispy shallots, luxe sesame bun.",
    calories: 940,
    ingredients: ["Smoked Brisket", "Velvet BBQ", "Crispy Shallots"],
    price: 1990,
    image: IMAGES.burgerGourmet,
    badge: "Limited",
  },
] as const;

export type MenuCategory =
  | "burgers"
  | "loaded-fries"
  | "chicken"
  | "desserts"
  | "drinks";

export const MENU_CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: "burgers", label: "Burgers" },
  { id: "loaded-fries", label: "Loaded Fries" },
  { id: "chicken", label: "Chicken" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export const MENU_ITEMS = [
  {
    id: "m1",
    category: "burgers" as MenuCategory,
    name: "Classic FOUR",
    desc: "Smashed beef, house sauce, lettuce, tomato",
    price: 990,
    calories: 650,
  },
  {
    id: "m2",
    category: "burgers" as MenuCategory,
    name: "Truffle Royale",
    desc: "Truffle mayo, double patty, gruyère",
    price: 1590,
    calories: 780,
  },
  {
    id: "m3",
    category: "burgers" as MenuCategory,
    name: "Spicy Inferno",
    desc: "Ghost pepper glaze, jalapeño, pepper jack",
    price: 1290,
    calories: 710,
  },
  {
    id: "m4",
    category: "loaded-fries" as MenuCategory,
    name: "Gold Dust Fries",
    desc: "Parmesan, garlic butter, gold dust seasoning",
    price: 690,
    calories: 480,
  },
  {
    id: "m5",
    category: "loaded-fries" as MenuCategory,
    name: "Brisket Loaded",
    desc: "Smoked brisket, cheese sauce, scallions",
    price: 890,
    calories: 620,
  },
  {
    id: "m6",
    category: "chicken" as MenuCategory,
    name: "Nashville Hot",
    desc: "Crispy thigh, cayenne honey, pickles",
    price: 1190,
    calories: 590,
  },
  {
    id: "m7",
    category: "chicken" as MenuCategory,
    name: "Korean Glaze Tenders",
    desc: "Gochujang glaze, sesame, scallion",
    price: 1090,
    calories: 520,
  },
  {
    id: "m8",
    category: "desserts" as MenuCategory,
    name: "Molten Lava Cake",
    desc: "Dark chocolate, gold leaf, vanilla bean gelato",
    price: 790,
    calories: 420,
  },
  {
    id: "m9",
    category: "desserts" as MenuCategory,
    name: "Bourbon Shake",
    desc: "Salted caramel, bourbon syrup, whipped luxe cream",
    price: 690,
    calories: 510,
  },
  {
    id: "m10",
    category: "drinks" as MenuCategory,
    name: "Black Gold Cola",
    desc: "House cola, smoked vanilla, citrus mist",
    price: 390,
    calories: 180,
  },
  {
    id: "m11",
    category: "drinks" as MenuCategory,
    name: "Passion Fizz",
    desc: "Passion fruit, sparkling, gold sugar rim",
    price: 490,
    calories: 120,
  },
  {
    id: "m12",
    category: "drinks" as MenuCategory,
    name: "Cold Brew Luxe",
    desc: "24hr brew, oat foam, date syrup",
    price: 590,
    calories: 90,
  },
];

export const GALLERY = [
  {
    src: u("1550547660-d9450f859349", 900),
    location: "DHA Phase 6",
    dish: "Obsidian Prime",
    tall: true,
  },
  {
    src: u("1571091718767-18b5b1457add", 900),
    location: "Gulberg III",
    dish: "Gold Dust Fries",
    tall: false,
  },
  {
    src: u("1594212699903-ec8a3eca50f5", 900),
    location: "Johar Town",
    dish: "Midnight Melt",
    tall: false,
  },
  {
    src: u("1551782450-a2132b4ba21d", 900),
    location: "Model Town",
    dish: "Truffle Royale",
    tall: true,
  },
  {
    src: u("1586190848861-99aa4a171e90", 900),
    location: "Bahria Town",
    dish: "Nashville Hot",
    tall: false,
  },
  {
    src: u("1504674900247-0877df9cc836", 900),
    location: "Liberty Market",
    dish: "Velvet Smoke",
    tall: true,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ayesha K.",
    text: "This isn't fast food. It's a cinematic experience on a plate. The Obsidian Prime is unreal.",
    rating: 5,
  },
  {
    name: "Hassan R.",
    text: "FOUR changed what I expect from burgers in Lahore. Premium without the pretension.",
    rating: 5,
  },
  {
    name: "Zainab M.",
    text: "Every detail — from packaging to the melt — screams international luxury brand.",
    rating: 5,
  },
  {
    name: "Omar S.",
    text: "Worth every rupee. The loaded fries alone could win awards.",
    rating: 4,
  },
];

export const BRANCHES = [
  {
    id: "dha",
    name: "FOUR DHA",
    address: "Block H, Phase 6, DHA, Lahore",
    hours: "12:00 PM – 2:00 AM",
    phone: "+92 300 111 0001",
    lat: 31.4697,
    lng: 74.4104,
  },
  {
    id: "gulberg",
    name: "FOUR Gulberg",
    address: "MM Alam Road, Gulberg III, Lahore",
    hours: "11:00 AM – 1:00 AM",
    phone: "+92 300 111 0002",
    lat: 31.5204,
    lng: 74.3587,
  },
  {
    id: "johar",
    name: "FOUR Johar Town",
    address: "R1 Block, Johar Town, Lahore",
    hours: "12:00 PM – 12:00 AM",
    phone: "+92 300 111 0003",
    lat: 31.4692,
    lng: 74.2728,
  },
  {
    id: "bahria",
    name: "FOUR Bahria",
    address: "Sector C, Bahria Town, Lahore",
    hours: "11:00 AM – 12:00 AM",
    phone: "+92 300 111 0004",
    lat: 31.3722,
    lng: 74.1856,
  },
];

export const INSTAGRAM_POSTS = [
  { id: "1", image: u("1568901346375-23c9450c58cd", 600), likes: "12.4K" },
  { id: "2", image: u("1550547660-d9450f859349", 600), likes: "9.8K" },
  { id: "3", image: u("1571091718767-18b5b1457add", 600), likes: "15.2K" },
  { id: "4", image: u("1594212699903-ec8a3eca50f5", 600), likes: "11.1K" },
  { id: "5", image: u("1551782450-a2132b4ba21d", 600), likes: "8.6K" },
  { id: "6", image: u("1467003909585-2f8a72700288", 600), likes: "10.3K" },
];

export const INGREDIENTS_EXPLOSION = [
  "Beef",
  "Cheese",
  "Truffle",
  "Brioche",
  "Pickles",
  "Smoke",
  "Gold",
  "Aioli",
];

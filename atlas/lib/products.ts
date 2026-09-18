export type Product = {
  id: number;
  slug: string;
  name: string;
  category: "Apparel" | "Accessories";
  collection: "New Arrivals" | "Essentials";
  price: number;
  description: string;
  sizes?: string[];
  colors: string[];
  images: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "structured-overshirt",
    name: "Structured Overshirt",
    category: "Apparel",
    collection: "New Arrivals",
    price: 4890,
    description:
      "A relaxed overshirt cut from a structured cotton blend with a clean architectural silhouette.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Stone", "Black"],
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "wide-leg-trouser",
    name: "Wide Leg Trouser",
    category: "Apparel",
    collection: "Essentials",
    price: 4290,
    description:
      "A high-rise trouser with a wide leg and understated tailoring for everyday wear.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Charcoal", "Sand"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      "https://images.unsplash.com/photo-1506629905607-d9c297d3e3b3",
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "heavyweight-tee",
    name: "Heavyweight Tee",
    category: "Apparel",
    collection: "Essentials",
    price: 2190,
    description:
      "A substantial everyday tee with a boxy fit, dropped shoulder, and dense cotton construction.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off White", "Black", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    ],
    featured: true,
  },
  {
    id: 4,
    slug: "utility-jacket",
    name: "Utility Jacket",
    category: "Apparel",
    collection: "New Arrivals",
    price: 6790,
    description:
      "A lightweight utility jacket defined by oversized pockets and a softly structured profile.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Stone"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27",
    ],
    featured: true,
  },
  {
    id: 5,
    slug: "canvas-tote",
    name: "Canvas Tote",
    category: "Accessories",
    collection: "Essentials",
    price: 1890,
    description:
      "A durable everyday tote constructed from heavyweight canvas with reinforced handles.",
    colors: ["Natural", "Black"],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
    ],
  },
  {
    id: 6,
    slug: "minimal-wallet",
    name: "Minimal Wallet",
    category: "Accessories",
    collection: "Essentials",
    price: 2490,
    description:
      "A compact leather wallet designed around clean lines and essential storage.",
    colors: ["Black", "Brown"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
      "https://images.unsplash.com/photo-1601598851547-4302969d7b4c",
    ],
  },
  {
    id: 7,
    slug: "everyday-cap",
    name: "Everyday Cap",
    category: "Accessories",
    collection: "New Arrivals",
    price: 1590,
    description:
      "A six-panel cotton cap with a curved brim and understated embroidered detailing.",
    colors: ["Black", "Stone", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
    ],
  },
  {
    id: 8,
    slug: "leather-belt",
    name: "Leather Belt",
    category: "Accessories",
    collection: "Essentials",
    price: 2790,
    description:
      "A full-grain leather belt finished with a restrained brushed-metal buckle.",
    colors: ["Black", "Brown"],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    ],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}

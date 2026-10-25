import type { Category, Market, Product } from "./types";

const BASE =
  process.env.API_BASE_URL ??
  "https://openapi.programming-hero.com/api/bazardor";

const UNITS: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

type RawProduct = {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: { dir: "up" | "down" | "flat"; pct: number };
  markets: Market[];
};

function normalize(r: RawProduct): Product {
  return {
    id: r.id,
    slug: r.slug,
    name: r.nameBn,
    emoji: r.image,
    unit: UNITS[r.unit] ?? r.unit,
    category: r.category,
    categoryName: r.categoryNameBn,
    categoryIcon: r.categoryIcon,
    price: r.today,
    yesterday: r.yesterday,
    lastWeek: r.lastWeek,
    lastMonth: r.lastMonth,
    change: r.change.pct,
    markets: r.markets ?? [],
  };
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getProducts(category?: string): Promise<Product[]> {
  const q = category ? `?category=${encodeURIComponent(category)}` : "";
  const raw = await getJson<RawProduct[]>(`/products${q}`);
  return raw.map(normalize);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getCategories(): Promise<Category[]> {
  return getJson<Category[]>("/categories");
}

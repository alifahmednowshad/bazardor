import { getCategories, getProducts } from "@/lib/api";
import type { Category, Product } from "@/lib/types";
import Navbar from "./Navbar";
import PriceTicker from "./PriceTicker";

export default async function Header() {
  let categories: Category[] = [];
  let products: Product[] = [];

  try {
    [categories, products] = await Promise.all([
      getCategories(),
      getProducts(),
    ]);
  } catch {
  
  }

  return (
    <div>
      <Navbar categories={categories} />
      <PriceTicker items={products} />
    </div>
  );
}

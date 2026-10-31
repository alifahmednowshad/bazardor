import { Suspense } from "react";
import { getCategories, getProducts } from "@/lib/api";
import type { Category, Product } from "@/lib/types";
import Container from "../ui/Container";
import Navbar from "./Navbar";
import PriceTicker from "./PriceTicker";

function NavbarFallback() {
  return (
    <header className="border-b border-gray-200 bg-white" aria-busy="true">
      <Container>
        <div className="flex h-28 items-start py-3">
          <div className="skeleton h-11 w-44" />
        </div>
      </Container>
    </header>
  );
}

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
      <Suspense fallback={<NavbarFallback />}>
        <Navbar categories={categories} />
      </Suspense>
      <PriceTicker items={products} />
    </div>
  );
}

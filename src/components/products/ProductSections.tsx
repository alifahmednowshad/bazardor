import { getProducts } from "@/lib/api";
import { toBn } from "@/lib/bn";
import type { Product } from "@/lib/types";
import ProductSection from "./ProductSection";

export default async function ProductSections() {
  let products: Product[];

  try {
    products = await getProducts();
  } catch {
    return (
      <p className="py-10 text-center text-red-600">
        পণ্যের তথ্য আনা যায়নি। একটু পরে আবার চেষ্টা করুন।
      </p>
    );
  }

  const risers = products
    .filter((p) => p.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, 6);

  return (
    <>
      <ProductSection
        title={
          <>
            <span className="text-red-600">▲</span> আজ দাম বেড়েছে
          </>
        }
        products={risers}
      />

      <ProductSection
        title={
          <>
            <span className="text-green-600">▼</span> আজ দাম কমেছে
          </>
        }
        products={fallers}
      />

      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle={`মোট ${toBn(products.length)}টি পণ্য দেখানো হচ্ছে`}
        products={products}
      />
    </>
  );
}

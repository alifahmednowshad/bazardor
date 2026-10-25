"use client";

import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { toBn } from "@/lib/bn";
import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

type Sort = "default" | "asc" | "desc";

export default function CategoryProducts({
  products,
}: {
  products: Product[];
}) {
  const [sort, setSort] = useState<Sort>("default");

  const sorted = useMemo(() => {
    if (sort === "default") return products;
    return [...products].sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price,
    );
  }, [products, sort]);

  return (
    <>
      <div className="mt-6 flex items-center justify-end gap-3 rounded-2xl border border-gray-200 bg-white/70 p-4">
        <label htmlFor="sort" className="text-gray-600">
          সাজান
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-9 text-base text-gray-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/30"
          >
            <option value="default">ডিফল্ট</option>
            <option value="asc">দাম: কম থেকে বেশি</option>
            <option value="desc">দাম: বেশি থেকে কম</option>
          </select>
          <FaChevronDown
            size={12}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <p className="mt-5 text-gray-600">
        মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="mt-3 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

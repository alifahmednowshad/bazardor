import type { ReactNode } from "react";
import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

type Props = {
  id?: string;
  title: ReactNode;
  subtitle?: string;
  products: Product[];
};

export default function ProductSection({
  id,
  title,
  subtitle,
  products,
}: Props) {
  if (!products.length) return null;

  return (
    <section id={id} className="scroll-mt-4 py-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-gray-500">{subtitle}</p>}

      <div className="mt-4 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

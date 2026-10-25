import Link from "next/link";
import { fmtPct, fmtPrice } from "@/lib/bn";
import type { Product } from "@/lib/types";

const UP = "text-red-600 bg-red-50";
const DOWN = "text-green-700 bg-green-50";

function ChangeBadge({ value }: { value: number }) {
  if (value === 0)
    return (
      <span className="rounded-md bg-gray-100 px-2 py-0.5 text-sm font-semibold text-gray-500">
        — ০.০%
      </span>
    );

  const up = value > 0;
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-sm font-semibold ${up ? UP : DOWN}`}
    >
      {up ? "▲" : "▼"} {fmtPct(value)}%
    </span>
  );
}

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4 transition hover:border-green-600 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
          {p.emoji}
        </span>
        <div className="min-w-0 leading-tight">
          <h3 className="truncate text-lg font-semibold text-gray-900">
            {p.name}
          </h3>
          <p className="text-sm text-gray-500">প্রতি {p.unit}</p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-sm text-gray-500">আজকের দাম</p>
          <p className="text-xl font-bold text-gray-900">
            {fmtPrice(p.price)}{" "}
            <span className="text-base font-medium">টাকা</span>
          </p>
        </div>
        <ChangeBadge value={p.change} />
      </div>
    </Link>
  );
}

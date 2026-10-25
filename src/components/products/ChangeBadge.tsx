import { fmtPct } from "@/lib/bn";

const UP = "text-red-600 bg-red-50";
const DOWN = "text-green-700 bg-green-50";

export default function ChangeBadge({ value }: { value: number }) {
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

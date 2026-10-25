import { fmtPct, fmtPrice } from "@/lib/bn";
import { TickerItem } from "@/lib/ticker-data";


function Change({ value }: { value: number }) {
  if (value === 0)
    return <span className="font-semibold text-gray-500">— ০.০%</span>;
  const up = value > 0;
  return (
    <span className={`font-semibold ${up ? "text-red-600" : "text-green-600"}`}>
      {up ? "▲" : "▼"} {fmtPct(value)}%
    </span>
  );
}

export default function PriceTicker({ items }: { items: TickerItem[] }) {
  if (!items.length) return null;

  return (
    <div className="group overflow-hidden border-b border-gray-200 bg-white">
      <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
            {items.map((it) => (
              <li
                key={`${copy}-${it.id}`}
                className="flex items-center gap-2 whitespace-nowrap border-r border-gray-200 px-5 py-2.5 text-sm"
              >
                <span aria-hidden>{it.emoji}</span>
                <span className="text-gray-800">{it.name}</span>
                <span className="text-gray-600">
                  {fmtPrice(it.price)} টাকা/{it.unit}
                </span>
                <Change value={it.change} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

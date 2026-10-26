import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ChangeBadge from "@/components/products/ChangeBadge";
import Container from "@/components/Shared/ui/Container";
import { getProductBySlug } from "@/lib/api";
import { auth } from "@/lib/auth";
import { fmtAvg, fmtPrice } from "@/lib/bn";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // লগইন না থাকলে সাইন ইন পেজে পাঠানো হবে, লগইনের পর আবার এই পেজেই ফিরবে
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect(
      `/signin?reason=login&next=${encodeURIComponent(`/product/${slug}`)}`,
    );
  }

  const p = await getProductBySlug(slug);
  if (!p) notFound();

  // বাজারের গড় = (সর্বনিম্ন + সর্বাধিক) / ২, গড় অনুযায়ী কম থেকে বেশি সাজানো
  const markets = p.markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const hasMarkets = markets.length > 0;
  const min = hasMarkets ? Math.min(...markets.map((m) => m.min)) : p.price;
  const max = hasMarkets ? Math.max(...markets.map((m) => m.max)) : p.price;
  const avg = hasMarkets
    ? Math.round(markets.reduce((s, m) => s + m.avg, 0) / markets.length)
    : p.price;

  const diff = Math.abs(p.price - p.yesterday);
  const trend =
    p.change > 0 ? "বেড়েছে" : p.change < 0 ? "কমেছে" : "অপরিবর্তিত";

  const summary = [
    {
      label: "সর্বনিম্ন দাম",
      value: min,
      note: "সবচেয়ে কম দামের বাজার",
      color: "text-green-700",
    },
    {
      label: "সর্বাধিক দাম",
      value: max,
      note: "সবচেয়ে বেশি দামের বাজার",
      color: "text-red-600",
    },
    {
      label: "গড় দাম",
      value: avg,
      note: `প্রতি ${p.unit}-এর হিসাবে`,
      color: "text-green-700",
    },
  ];

  return (
    <main className="py-6">
      <Container>
        {/* ব্রেডক্রাম্ব */}
        <nav
          aria-label="breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-gray-600"
        >
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span aria-hidden>›</span>
          <Link
            href={`/category/${p.category}`}
            className="hover:text-green-700"
          >
            {p.categoryName}
          </Link>
          <span aria-hidden>›</span>
          <span className="text-gray-900">{p.name}</span>
        </nav>

        {/* সারাংশ */}
        <section className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-4xl sm:h-20 sm:w-20 sm:text-5xl">
              {p.emoji}
            </span>
            <div className="leading-snug">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">
                {p.name}
              </h1>
              <p className="text-gray-500">
                প্রতি {p.unit} ·{" "}
                <Link
                  href={`/category/${p.category}`}
                  className="rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-700 hover:bg-green-200"
                >
                  {p.categoryName}
                </Link>
              </p>
              <p className="mt-1 text-gray-800">
                গতকালের তুলনায় আজ দাম <strong>{trend}</strong>
                {diff > 0 && <> · {fmtPrice(diff)} টাকা</>}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 px-6 py-4 text-center sm:min-w-40">
            <p className="text-gray-500">আজকের দাম</p>
            <p className="text-4xl font-bold text-gray-900">
              {fmtPrice(p.price)}
            </p>
            <p className="text-gray-500">টাকা / {p.unit}</p>
            <div className="mt-1">
              <ChangeBadge value={p.change} />
            </div>
          </div>
        </section>

        {/* দামের সারসংক্ষেপ + টেবিল */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900">দামের সারসংক্ষেপ</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {summary.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className={`mt-1 text-3xl font-bold ${s.color}`}>
                  {fmtPrice(s.value)}{" "}
                  <span className="text-base font-medium">টাকা</span>
                </p>
                <p className="mt-1 text-sm text-gray-500">{s.note}</p>
              </div>
            ))}
          </div>

          {hasMarkets && (
            <>
              <h2 className="mt-8 text-xl font-bold text-gray-900">
                বাজারভিত্তিক আজকের দাম
              </h2>

              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[560px] text-left">
                  <thead className="bg-gray-50 text-gray-500">
                    <tr>
                      <th className="px-4 py-3 font-medium">বাজার</th>
                      <th className="px-4 py-3 font-medium">বিভাগ</th>
                      <th className="px-4 py-3 text-right font-medium">
                        সর্বনিম্ন
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        সর্বাধিক
                      </th>
                      <th className="px-4 py-3 text-right font-medium">গড়</th>
                    </tr>
                  </thead>
                  <tbody>
                    {markets.map((m) => (
                      <tr
                        key={m.market}
                        className="border-t border-gray-200 even:bg-gray-50/70"
                      >
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {m.market}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {m.division}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-700">
                          {fmtPrice(m.min)} টাকা
                        </td>
                        <td className="px-4 py-3 text-right text-gray-700">
                          {fmtPrice(m.max)} টাকা
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-gray-900">
                          {fmtAvg(m.avg)} টাকা
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </Container>
    </main>
  );
}

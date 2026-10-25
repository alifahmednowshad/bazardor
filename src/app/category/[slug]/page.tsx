import { notFound } from "next/navigation";
import Container from "@/components/Shared/ui/Container";
import EmptyState from "@/components/Shared/ui/EmptyState";
import CategoryProducts from "@/components/products/CategoryProducts";
import { getCategories, getProducts } from "@/lib/api";
import { toBn } from "@/lib/bn";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(slug),
  ]);

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <main className="py-6">
      <Container>
        <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/70 p-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl">
            {category.icon}
          </span>
          <div className="leading-tight">
            <h1 className="text-3xl font-bold text-gray-900">
              {category.nameBn}
            </h1>
            <p className="mt-1 text-gray-500">
              {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {products.length ? (
          <CategoryProducts products={products} />
        ) : (
          <EmptyState
            title="এই ক্যাটাগরিতে কোনো পণ্য নেই"
            message="অন্য ক্যাটাগরি দেখুন অথবা হোম পেজে ফিরে যান।"
          />
        )}
      </Container>
    </main>
  );
}

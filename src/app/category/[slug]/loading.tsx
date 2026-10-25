import Container from "@/components/Shared/ui/Container";
import ProductsSkeleton from "@/components/products/ProductsSkeleton";

export default function Loading() {
  return (
    <main className="py-6">
      <Container>
        <div className="h-24 animate-pulse rounded-2xl bg-gray-200" />
        <ProductsSkeleton />
      </Container>
    </main>
  );
}

import { Suspense } from "react";
import Hero from "@/components/Hero";
import Container from "@/components/Shared/ui/Container";
import ProductSections from "@/components/products/ProductSections";
import ProductsSkeleton from "@/components/products/ProductsSkeleton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container>
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductSections />
        </Suspense>
      </Container>
    </main>
  );
}

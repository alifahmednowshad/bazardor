import type { Metadata } from "next";
import { Suspense } from "react";
import SignInForm from "@/components/auth/SignInForm";
import Container from "@/components/Shared/ui/Container";

export const metadata: Metadata = { title: "সাইন ইন | বাজার দর" };

export default function SignInPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Suspense
          fallback={
            <div className="mx-auto h-96 max-w-md animate-pulse rounded-2xl bg-gray-200" />
          }
        >
          <SignInForm />
        </Suspense>
      </Container>
    </main>
  );
}

import type { Metadata } from "next";

import SignUpForm from "@/components/auth/SignUpForm";
import Container from "@/components/Shared/ui/Container";

export const metadata: Metadata = { title: "সাইন আপ | বাজার দর" };

export default function SignUpPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <SignUpForm />
      </Container>
    </main>
  );
}

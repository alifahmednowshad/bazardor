import type { Metadata } from "next";
import SignInForm from "@/components/auth/SignInForm";
import Container from "@/components/Shared/ui/Container";

export const metadata: Metadata = { title: "সাইন ইন | বাজার দর" };

export default function SignInPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <SignInForm />
      </Container>
    </main>
  );
}

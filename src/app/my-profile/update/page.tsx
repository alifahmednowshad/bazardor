import type { Metadata } from "next";
import Container from "@/components/Shared/ui/Container";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

export const metadata: Metadata = { title: "তথ্য আপডেট | বাজার দর" };

export default function UpdateProfilePage() {
  return (
    <main className="py-8">
      <Container>
        <div className="mx-auto max-w-2xl">
          <UpdateProfileForm />
        </div>
      </Container>
    </main>
  );
}

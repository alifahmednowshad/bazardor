import type { Metadata } from "next";
import Container from "@/components/Shared/ui/Container";
import ProfileView from "@/components/profile/ProfileView";

export const metadata: Metadata = { title: "আমার প্রোফাইল | বাজার দর" };

export default function MyProfilePage() {
  return (
    <main className="py-8">
      <Container>
        <div className="mx-auto max-w-2xl">
          <ProfileView />
        </div>
      </Container>
    </main>
  );
}

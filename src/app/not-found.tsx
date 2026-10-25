import Container from "@/components/Shared/ui/Container";
import EmptyState from "@/components/Shared/ui/EmptyState";

export default function NotFound() {
  return (
    <main>
      <Container>
        <EmptyState
          code="৪০৪"
          title="পেজটি খুঁজে পাওয়া যায়নি"
          message="আপনি যে পেজটি খুঁজছেন তা নেই বা সরিয়ে ফেলা হয়েছে।"
        />
      </Container>
    </main>
  );
}

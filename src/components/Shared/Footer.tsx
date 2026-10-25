import Container from "./ui/Container";


export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white/70">
      <Container>
        <div className="flex flex-col gap-2 py-5 text-center text-sm text-gray-600 sm:text-base md:flex-row md:items-center md:justify-between md:text-left">
          <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
          <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
        </div>
      </Container>
    </footer>
  );
}

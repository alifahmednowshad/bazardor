import Image from "next/image";
import Container from "./Shared/ui/Container";
import BanglaDate from "./BanglaDate";
import heroImg from "@/assets/bazar-hero.png";

export default function Hero() {
  return (
    <section className="py-6">
      <Container>
        <div className="flex flex-col-reverse items-center gap-8 rounded-3xl border border-gray-200 bg-white/70 p-6 sm:p-8 md:flex-row md:justify-between lg:px-10 lg:py-10">
          {/* বাম দিক: লেখা */}
          <div className="w-full text-center md:max-w-xl md:text-left">
            <BanglaDate className="inline-block min-w-44 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700" />

            <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <a
              href="#সব-পণ্য"
              className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-green-800"
            >
              সব পণ্য দেখুন
            </a>
          </div>

          {/* ডান দিক: ছবি */}
          <Image
            src={heroImg}
            alt="ফলের ঝুড়ি"
            priority
            className="h-auto w-48 sm:w-56 lg:w-72"
          />
        </div>
      </Container>
    </section>
  );
}

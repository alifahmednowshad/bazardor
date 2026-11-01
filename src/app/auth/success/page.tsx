"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { safeNext } from "@/lib/auth-utils";

export default function SocialAuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next = safeNext(params.get("next"));

    toast.success("সফলভাবে সাইন ইন হয়েছে!", { id: "social-auth-success" });

    // সাথে সাথে পরের পেজে যাবে; টোস্ট নতুন পেজেও থাকবে
    router.replace(next);
    router.refresh();
  }, [router]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <span className="loading loading-spinner loading-lg text-success" />

      <h1 className="text-xl font-bold text-gray-900">
        সফলভাবে সাইন ইন হয়েছে!
      </h1>

      <p className="text-sm text-gray-600">
        আপনাকে পরবর্তী পেজে নিয়ে যাওয়া হচ্ছে...
      </p>
    </main>
  );
}

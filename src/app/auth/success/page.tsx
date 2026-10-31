"use client";

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { safeNext } from "@/lib/auth-utils";

export default function SocialAuthSuccessPage() {
//   const hasRun = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next = safeNext(params.get("next"));

    console.log("Social login success page loaded");
    console.log("Next URL:", next);

    toast.success("সফলভাবে সাইন ইন হয়েছে!", {
      id: "social-auth-success",
    });

    const timer = window.setTimeout(() => {
      console.log("Redirecting to:", next);
      window.location.href = next;
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

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

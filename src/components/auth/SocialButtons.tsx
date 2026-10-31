"use client";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const btn =
  "flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-300! bg-white px-3 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98]";

export default function SocialButtons({
  callbackURL = "/",
}: {
  callbackURL?: string;
}) {
  const social = async (provider: "google" | "github") => {
    const { error } = await authClient.signIn.social({ provider, callbackURL });
    if (error) toast.error("সোশ্যাল লগইন করা যায়নি");
  };

  return (
    <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
      <button type="button" onClick={() => social("google")} className={btn}>
        <FcGoogle size={22} className="shrink-0" />
        Google দিয়ে চালিয়ে যান
      </button>
      <button type="button" onClick={() => social("github")} className={btn}>
        <FaGithub size={22} className="shrink-0" />
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
}

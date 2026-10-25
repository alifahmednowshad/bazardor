"use client";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const btn =
  "flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50";

export default function SocialButtons() {
  const social = async (provider: "google" | "github") => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) toast.error(error.message || "লগইন করা যায়নি");
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button type="button" onClick={() => social("google")} className={btn}>
        <FcGoogle size={20} />
        Google দিয়ে চালিয়ে যান
      </button>
      <button type="button" onClick={() => social("github")} className={btn}>
        <FaGithub size={20} />
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
}

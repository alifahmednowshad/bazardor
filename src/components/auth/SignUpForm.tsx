"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "./SocialButtons";
import { authErrorBn } from "@/lib/auth-utils";

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/30";

export default function SignUpForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);

  const set =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "আপনার নাম লিখুন";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "সঠিক ইমেইল লিখুন";
    if (form.password.length < 8) return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
    if (form.password !== form.confirm) return "পাসওয়ার্ড দুটি মিলছে না";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const problem = validate();
    if (problem) return toast.error(problem);

    setLoading(true);
    const { error } = await authClient.signUp.email({
      name: form.name.trim(),
      email: form.email,
      password: form.password,
    });
    setLoading(false);

    if (error) return toast.error(authErrorBn(error, "সাইন আপ করা যায়নি"));

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
    router.push("/signin");
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-2 text-gray-600">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:p-6">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block font-medium text-gray-800"
            >
              নাম
            </label>
            <input
              id="name"
              autoComplete="name"
              placeholder="যেমন: রহিম উদ্দিন"
              value={form.name}
              onChange={set("name")}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-medium text-gray-800"
            >
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set("email")}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block font-medium text-gray-800"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              value={form.password}
              onChange={set("password")}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="confirm"
              className="mb-1 block font-medium text-gray-800"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirm"
              type="password"
              autoComplete="new-password"
              placeholder="আবার লিখুন"
              value={form.confirm}
              onChange={set("confirm")}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-green-700 py-2.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-sm text-gray-500">
          <span className="h-px flex-1 bg-gray-200" />
          অথবা
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <SocialButtons />

        <p className="mt-5 text-center text-gray-700">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-medium text-green-700 hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <p className="mt-6 text-center">
        <Link href="/" className="text-gray-500 hover:text-gray-800">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useCurrentUser } from "@/lib/use-current-user";

function NameForm({ initialName }: { initialName: string }) {
  const router = useRouter();
  const [name, setName] = useState(initialName);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return toast.error("সঠিক নাম লিখুন");

    setLoading(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setLoading(false);

    if (error) return toast.error("তথ্য আপডেট করা যায়নি");

    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block font-medium text-gray-800">
          নাম
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="আপনার নাম"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/30"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-green-700 py-2.5 text-base font-semibold text-white shadow-md hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "অপেক্ষা করুন..." : "তথ্য আপডেট করুন"}
      </button>
    </form>
  );
}

export default function UpdateProfileForm() {
  const { user, isPending } = useCurrentUser();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">তথ্য আপডেট করুন</h1>
      <p className="mt-1 text-gray-500">আপনার নাম বদলান।</p>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:p-6">
        {isPending || !user ? (
          <div className="h-32 animate-pulse rounded-xl bg-gray-200" />
        ) : (
          <NameForm initialName={user.name} />
        )}
      </div>

      <p className="mt-6 text-center">
        <Link href="/my-profile" className="text-gray-500 hover:text-gray-800">
          ← প্রোফাইলে ফিরে যান
        </Link>
      </p>
    </div>
  );
}

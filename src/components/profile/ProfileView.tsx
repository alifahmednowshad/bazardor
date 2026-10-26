"use client";

import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import UserAvatar from "@/components/Shared/ui/UserAvatar";
import { useCurrentUser } from "@/lib/use-current-user";

function ProfileSkeleton() {
  return (
    <div className="space-y-6" aria-busy="true">
      <div className="h-28 animate-pulse rounded-2xl bg-gray-200" />
      <div className="h-64 animate-pulse rounded-2xl bg-gray-200" />
    </div>
  );
}

export default function ProfileView() {
  const { user, isPending, signOut } = useCurrentUser();

  if (isPending) return <ProfileSkeleton />;
  if (!user)
    return (
      <p className="text-center text-gray-600">
        <Link href="/signin" className="text-green-700 underline">
          সাইন ইন
        </Link>{" "}
        করে প্রোফাইল দেখুন।
      </p>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">আমার প্রোফাইল</h1>
      <p className="mt-1 text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

      <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/70 p-5">
        <div className="flex min-w-0 items-center gap-4">
          <UserAvatar name={user.name} image={user.image} size={72} />
          <div className="min-w-0">
            <p className="truncate text-xl font-semibold text-gray-900">
              {user.name}
            </p>
            <p className="truncate text-gray-500">{user.email}</p>
          </div>
        </div>
        <button
          onClick={signOut}
          className="flex shrink-0 items-center gap-2 rounded-md border border-red-500 px-3 py-2 text-red-600 hover:bg-red-50"
        >
          <FiLogOut /> <span className="hidden sm:inline">সাইন আউট</span>
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-5 sm:p-6">
        <h2 className="text-lg font-bold text-gray-900">তথ্য</h2>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="text-sm text-gray-500">নাম</dt>
            <dd className="text-lg text-gray-900">{user.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-500">ইমেইল</dt>
            <dd className="text-lg text-gray-900">{user.email}</dd>
          </div>
        </dl>

        <Link
          href="/my-profile/update"
          className="mt-6 block w-full rounded-md bg-green-700 py-2.5 text-center text-base font-semibold text-white shadow-md hover:bg-green-800"
        >
          তথ্য আপডেট করুন
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import BanglaDate from "@/components/BanglaDate";
import UserAvatar from "@/components/Shared/ui/UserAvatar";
import type { Category } from "@/lib/types";
import { useCurrentUser } from "@/lib/use-current-user";
import Container from "../ui/Container";
// import Image from "next/image";
// import logo from "@/assets/logo-icon.png";
// import { PiBasketFill } from "react-icons/pi";

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  const { user, isPending, signOut } = useCurrentUser();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex items-center justify-between gap-3 py-3">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            {/* <Image
              src={logo}
              alt="বাজার দর লোগো"
              priority
              className="h-10 w-10 shrink-0 rounded-lg bg-green-600 object-contain p-1.5 sm:h-11 sm:w-11"
            /> */}

            {/* or */}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600 text-lg text-white sm:h-11 sm:w-11 sm:text-xl">
              <FaShoppingCart />
            </span>
            {/* big size logo */}
            {/* <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-600 text-2xl text-white sm:h-12 sm:w-12 sm:text-3xl">
              <FaShoppingCart />
            </span> */}

            {/* or */}
            {/* <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600 text-white sm:h-11 sm:w-11">
              <PiBasketFill size={24} />
            </span> */}

            <span className="min-w-0 leading-tight">
              <span className="block truncate text-xl font-bold text-gray-900 sm:text-2xl">
                বাজার দর
              </span>
              <BanglaDate className="block truncate text-xs text-gray-500 sm:text-sm" />
            </span>
          </Link>

          {isPending ? (
            <div className="h-10 w-28 shrink-0 animate-pulse rounded-lg bg-gray-200" />
          ) : user ? (
            <div className="relative shrink-0">
              <button
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-3 hover:bg-gray-100"
              >
                <UserAvatar name={user.name} image={user.image} size={36} />
                <span className="hidden max-w-32 truncate text-base font-medium text-gray-800 sm:block">
                  {user.name.split(" ")[0]}
                </span>
                <span className="text-[10px] text-gray-400">▾</span>
              </button>

              {open && (
                <>
                  <button
                    aria-label="মেনু বন্ধ করুন"
                    className="fixed inset-0 z-10 cursor-default"
                    onClick={() => setOpen(false)}
                  />
                  <div className="absolute right-0 z-20 mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                    <p className="truncate text-lg font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      {user.email}
                    </p>

                    <div className="mt-4 space-y-1">
                      <Link
                        href="/my-profile"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 rounded-md px-1 py-2 text-base text-gray-800 hover:bg-gray-100"
                      >
                        <FaRegUser /> আমার প্রোফাইল
                      </Link>
                      <button
                        onClick={() => {
                          setOpen(false);
                          signOut();
                        }}
                        className="flex w-full items-center gap-2 rounded-md px-1 py-2 text-left text-base text-red-600 hover:bg-red-50"
                      >
                        <FiLogOut /> সাইন আউট
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/signin"
                className="whitespace-nowrap rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 sm:px-4 sm:text-base"
              >
                সাইন ইন
              </Link>
              <Link
                href="/signup"
                className="whitespace-nowrap rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 sm:px-4 sm:text-base"
              >
                সাইন আপ
              </Link>
            </div>
          )}
        </div>
      </Container>

      <nav
        aria-label="ক্যাটাগরি"
        className="overflow-x-auto border-t border-gray-200 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <Container>
          <ul className="flex w-max gap-1">
            {categories.map((c) => {
              const href = `/category/${c.slug}`;
              const active = pathname === href;
              return (
                <li key={c.slug} className="shrink-0">
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 sm:text-base ${
                      active
                        ? "bg-green-700 font-semibold text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span aria-hidden>{c.icon}</span>
                    {c.nameBn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>
    </header>
  );
}

"use client";

import { useCurrentUser } from "@/lib/use-current-user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../ui/Container";
import BanglaDate from "@/components/BanglaDate";


const categories = [
  { slug: "chal", name: "চাল", emoji: "🍚" },
  { slug: "dal", name: "ডাল", emoji: "🫘" },
  { slug: "tel", name: "তেল", emoji: "🫙" },
  { slug: "sobji", name: "সবজি", emoji: "🥬" },
  { slug: "mach", name: "মাছ", emoji: "🐟" },
  { slug: "mangsho", name: "মাংস", emoji: "🍗" },
  { slug: "dim-dudh", name: "ডিম-দুধ", emoji: "🥛" },
  { slug: "moshla", name: "মসলা", emoji: "🌶️" },
];



export default function Navbar() {
  const pathname = usePathname();
  const { user, signOut } = useCurrentUser();
  const [open, setOpen] = useState(false);
  const currentUser = user as { image?: string | null; name: string } | null;

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-600 text-xl text-white">
              🛒
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold text-gray-900">
                বাজার দর
              </span>
              <BanglaDate className="block text-xs text-gray-500" />
            </span>
          </Link>

          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 hover:bg-gray-100"
              >
                {currentUser.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={currentUser.image}
                    alt={currentUser.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </span>
                )}
                <span className="hidden text-sm font-medium text-gray-800 sm:block">
                  {currentUser.name}
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
                  <div className="absolute right-0 z-20 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
                    <Link
                      href="/my-profile"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      আমার প্রোফাইল
                    </Link>
                    <button
                      onClick={() => {
                        setOpen(false);
                        signOut();
                      }}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      সাইন আউট
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/signin"
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 sm:px-4"
              >
                সাইন ইন
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 sm:px-4"
              >
                সাইন আপ
              </Link>
            </div>
          )}
        </div>
      </Container>

      <nav
        aria-label="ক্যাটাগরি"
        className="overflow-x-auto border-t border-gray-200 py-2"
      >
        <Container>
          <ul className="flex min-w-max justify-start gap-1">
            {categories.map((c) => {
              const href = `/category/${c.slug}`;
              const active = pathname === href;
              return (
                <li key={c.slug}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-green-100 font-semibold text-green-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span aria-hidden>{c.emoji}</span>
                    {c.name}
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

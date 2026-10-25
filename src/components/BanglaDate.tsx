"use client";

import { useSyncExternalStore } from "react";
import { banglaDate } from "@/lib/bn";

const subscribe = () => () => {};

export default function BanglaDate({ className }: { className?: string }) {
  const date = useSyncExternalStore(subscribe, banglaDate, () => "");

  return (
    <span className={className} suppressHydrationWarning>
      {date || "\u00A0"}
    </span>
  );
}

"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "./auth-client";

export function useCurrentUser() {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const signOut = async () => {
    const { error } = await authClient.signOut();
    if (error) return toast.error("সাইন আউট করা যায়নি");
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  };

  return { user: data?.user ?? null, isPending, signOut };
}

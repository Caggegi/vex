"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Don't run on login page
    if (!pathname) return;

    const normalized = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
    if (normalized === "/login") return;

    try {
      const user = localStorage.getItem("user");
      if (!user) {
        // If not authenticated, redirect to login
        router.replace("/login");
      }
    } catch (e) {
      // If localStorage access fails, redirect to login as a safe fallback
      router.replace("/login");
    }
  }, [pathname, router]);

  return <>{children}</>;
}

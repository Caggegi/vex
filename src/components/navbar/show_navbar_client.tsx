"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import React from "react";

// Show Navbar on all routes except /login (and /login/ variants)
export default function ShowNavbarClient() {
  const pathname = usePathname();

  if (!pathname) return null;

  // Normalize trailing slash: treat '/login' and '/login/' as login page
  const normalized = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  if (normalized === "/login") return null;

  return <Navbar />;
}

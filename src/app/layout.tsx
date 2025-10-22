import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import ShowNavbarClient from "@/components/navbar/show_navbar_client";
import AuthGuard from "@/components/auth/auth_guard_client";
import { NextIntlClientProvider } from 'next-intl';
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vex one",
  description: "Ship fast everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider>
          <Theme appearance="light" accentColor="lime" hasBackground={true} className="backimage">
            <AuthGuard>
              <ShowNavbarClient />
              {children}
              <Footer />
            </AuthGuard>
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

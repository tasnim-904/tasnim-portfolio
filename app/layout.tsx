import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tasnim Portfolio", // Your custom title
  description:
    "Tasnim's portfolio showcasing creative projects, skills, and certificates",
  generator: "v0.app",
  metadataBase: new URL("https://tasnim-portfolio-ep6lgrkub-tasnimnakbi321-gmailcoms-projects.vercel.app"),
  keywords: ["portfolio", "developer", "projects", "skills", "certificates"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}

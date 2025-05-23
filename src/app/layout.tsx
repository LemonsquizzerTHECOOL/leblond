import "~/valeriane/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Zain } from "next/font/google";

export const metadata: Metadata = {
  title: "Valeriane's home page",
  description: "valeriane",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const zain = Zain({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-zain",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${zain.variable}`}>
      <body>{children}</body>
    </html>
  );
}

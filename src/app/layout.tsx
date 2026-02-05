import type { Metadata } from "next";
import { Geist, Geist_Mono, Ovo, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ovo = Ovo({
  variable: "--font-im-fell",
  weight: "400",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jevin",
  description: "Jevin Benthotage Wijenayake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ovo.variable} ${reenieBeanie.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

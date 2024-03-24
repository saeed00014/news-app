import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";

const myFont = localFont({ src: "../font/IRANSansXMedium.ttf" });

export const metadata: Metadata = {
  title: "news app",
  description: "its a news app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full bg-moon" lang="fa">
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

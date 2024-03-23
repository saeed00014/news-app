import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="fa">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

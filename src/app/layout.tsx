import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Providers from "@/components/providers";

const myFont = localFont({ src: "../font/IRANSansXMedium.ttf" });

export const metadata: Metadata = {
  title: "news app",
  description: "its a news app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={myFont.className}>
        <div style={{scrollbarWidth: "none"}} className="dark flex flex-col items-center h-screen w-screen bg-moon text-dark overflow-y-auto lg:pb-0 lg:pt-[81px] py-[70px] lg:px-4 px-2">
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}

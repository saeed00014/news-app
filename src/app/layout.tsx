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
    <html className="h-full w-full bg-moon" lang="fa">
      <body className={myFont.className}>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="dark text-dark w-full h-full max-w-[1400px] lg:px-8 pb-[70px]">
            <Providers>
              <Header />
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}

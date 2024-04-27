import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Providers from "@/components/providers";
import PopUpStack from "@/components/ui/popUpStack";

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
        <div style={{scrollbarWidth: "none"}} className="dark flex flex-col items-center h-screen w-screen bg-moon text-dark overflow-y-auto lg:pb-0 lg:pt-[81px] py-[70px] lg:px-4 md:px-2 px-1">
          <Providers>
            <Header />
            {children}
            <PopUpStack />
          </Providers>
        </div>
      </body>
    </html>
  );
}

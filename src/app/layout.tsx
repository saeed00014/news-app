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
        <div
          style={{ scrollbarWidth: "none" }}
          className="dark bg-moon text-dark flex justify-center items-center h-[100vh] w-[100vw] lg:px-4 lg:pb-0 lg:pt-[81px] py-[65px]"
        >
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

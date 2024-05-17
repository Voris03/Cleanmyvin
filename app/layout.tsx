import { Metadata } from "next";
import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/Providers";

import Head from "./_components/Head";
import { Yandex } from "./_components/yandex";

export const metadata: Metadata = {
  title: {
    template: "%s | Checkusavin",
    default: "Авто из США | Checkusavin",
  },
  description:
    "Купили авто из США? Узнайте его историю и технические подробности.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Head />

      <Suspense>
        <Yandex />
      </Suspense>

      <body>
        <Providers>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

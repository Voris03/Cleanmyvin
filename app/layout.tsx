import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Providers from "Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head />

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

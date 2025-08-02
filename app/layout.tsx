import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/app/ui/footer/footer";
import { inter } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Hangman",
  description: "Hangman built my Michael Fryer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        <div className="grid min-h-lvh grid-rows-layout justify-items-stretch">
          {/* Content */}
          <div className="m-auto w-11/12 max-w-screen-xl p-4">{children}</div>
          {/* Footer */}
          <div className="row-start-3 p-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

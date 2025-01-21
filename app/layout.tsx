import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/app/ui/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics/>
        <div className="grid grid-rows-layout min-h-lvh justify-items-stretch">
          {/* Content */}
          <div className="p-4 m-auto">
            {children}
          </div>
          {/* Footer */}
          <div className="row-start-3 p-4">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}

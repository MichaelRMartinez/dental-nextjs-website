import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dmSans-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentora | Expert Dental Care & Cosmetic Dentistry",
  description: "Experience exceptional dental care with modern cosmetic treatments and advanced procedures designed for your comfort and confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />  
      </body>
    </html>
  );
}

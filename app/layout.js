import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navebar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KBC",
  description: "question and answar game ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#362048]`}
      >
        <Navebar/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Image from "next/image"; 

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boost Your Business",
  description: "This is the business website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/iconito.ico" />
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}

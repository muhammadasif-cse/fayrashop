import Header from "@/components/pages/header";
import Navbar from "@/components/pages/navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fayrashop",
  description:
    "Fayrashop is a multivendor e-commerce platform connecting customers with trusted sellers. It offers quality products across fashion, electronics, home essentials, and more. With a focus on variety, security, and convenience, Fayrashop ensures a seamless and enjoyable shopping experience for all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        <Header />
        <Navbar />
        <main className="container px-4 mx-auto sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}

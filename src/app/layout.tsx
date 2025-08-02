import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import ReduxProviders from "@/redux/provider";
import Navigation from "@/components/pages/navigation";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppinsSans.variable} antialiased`}>
        <ReduxProviders>
          <Navigation />
          <main>{children}</main>
          <Toaster position="top-right" richColors />
        </ReduxProviders>
      </body>
    </html>
  );
}

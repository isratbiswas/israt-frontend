import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InitialLoader from "@/components/layout/InitialLoader";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Designed with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <InitialLoader />
        <Navbar />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

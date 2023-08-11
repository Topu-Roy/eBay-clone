import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eBay Clone by Topu",
  description: "Made by Topu Roy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}

import { Metadata } from "next";
import React from "react";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Desmet",
  description: "Développeur web freelance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

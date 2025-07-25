import type { Metadata } from "next";
import clsx from 'clsx'
import "./globals.css";
import NavBar from "./components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'

export const metadata: Metadata = {
  title: "JADE",
  description: "Jade-commerce Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body
          className={clsx(`bg-slate-700 antialiased`)}>
            <NavBar/>
            <main className=" h-screen p-16">
              {children}
            </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
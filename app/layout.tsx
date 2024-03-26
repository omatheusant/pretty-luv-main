import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ptBR } from "@clerk/localizations";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pretty Luv",
  description: "Edit, create and share to everyone!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider
        localization={ptBR}
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "#ee2963" },
        }}
      >
        <html lang="ptBR">
          <head />
          <body className={`${font.className} bg-background `}>
            <ThemeProvider attribute="class" defaultTheme="dark">
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}

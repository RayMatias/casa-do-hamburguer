import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Poppins, Inter } from "next/font/google";

// 🔹 Importações do Uploadthing
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import { Providers } from "./components/ui/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Casa do Hambúrguer",
  description: "O melhor hambúrguer da cidade",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <Providers>
          {/* 🔹 Plugin do Uploadthing para hidratar as regras (ex: tamanho de ficheiro) no cliente */}
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {/* <Header/> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
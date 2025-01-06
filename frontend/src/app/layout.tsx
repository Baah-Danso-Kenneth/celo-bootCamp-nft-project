import Header from "@/components/Header";
import "./globals.css";
import { Metadata } from "next";
import {Allura, Playwrite_IT_Trad, Nunito_Sans, Walter_Turncoat} from "next/font/google"


const play = Playwrite_IT_Trad({
  variable: '--font-play',
  weight: ['200','300'],
});

const nunito = Nunito_Sans({
  variable: '--font-nunito',
  weight: ['300', '600'],
  subsets: ['latin'],
});

const allura= Allura({
  variable: '--font-allura',
  weight: ['400'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "STICKY NFT MARKET",
  description: "FIND ALL DIGITAL ARTS"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${play.variable} ${allura.variable} antialiased bg-[#cec8bc]`}>
           {children}
      </body>
    </html>
  );
}

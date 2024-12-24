import "./globals.css";
import { Metadata } from "next";

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
      <body
      >
           {children}
      </body>
    </html>
  );
}

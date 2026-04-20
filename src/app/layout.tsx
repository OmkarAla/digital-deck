import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Dubai Mall | A Global Platform for Brands",
  description: "Experience the world's most visited retail and lifestyle destination. A platform for luxury, innovation, and global scale.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark antialiased`}>
      <body className="bg-background text-foreground font-sans selection:bg-dubai-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}

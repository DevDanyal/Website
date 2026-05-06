import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danyal Arshad | AI & Python Developer",
  description: "World-class AI & Python developer crafting intelligent solutions with cutting-edge technology",
  keywords: ["AI Developer", "Python Developer", "Full-Stack Developer", "Machine Learning", "NLP"],
  authors: [{ name: "Danyal Arshad" }],
  openGraph: {
    title: "Danyal Arshad | AI & Python Developer",
    description: "World-class AI & Python developer crafting intelligent solutions",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

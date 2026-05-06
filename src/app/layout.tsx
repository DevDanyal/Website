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
  description: "World-class AI & Python developer specializing in machine learning, NLP, and full-stack development. Building intelligent applications that make an impact.",
  keywords: ["AI Developer", "Python Developer", "Full-Stack Developer", "Machine Learning", "NLP", "LangChain", "Next.js", "FastAPI", "Portfolio"],
  authors: [{ name: "Danyal Arshad", url: "https://github.com/DevDanyal" }],
  creator: "Danyal Arshad",
  publisher: "Danyal Arshad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danyalarshad.vercel.app",
    siteName: "Danyal Arshad Portfolio",
    title: "Danyal Arshad | AI & Python Developer",
    description: "World-class AI & Python developer crafting intelligent solutions with cutting-edge technology",
    images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Danyal Arshad - AI & Python Developer",
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danyal Arshad | AI & Python Developer",
    description: "World-class AI & Python developer crafting intelligent solutions",
    images: ["/og-image.svg"],
    creator: "@DevDanyal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Danyal Arshad",
  },
  applicationName: "Danyal Arshad Portfolio",
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Danyal Arshad",
              jobTitle: "AI & Python Developer",
              url: "https://danyalarshad.vercel.app",
              sameAs: [
                "https://github.com/DevDanyal",
                "https://linkedin.com/in/dev-danyal-72b295405/",
              ],
              email: "aidevdanyal@gmail.com",
              knowsAbout: ["Python", "Machine Learning", "AI", "Next.js", "FastAPI", "TypeScript"],
            }),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trdwi.vercel.app'),
  title: {
    default: 'BrewCraft — Coffee Recipes & Brewing Guides | Tricha Dwinasty',
    template: '%s | BrewCraft',
  },
  description: 'Curated coffee recipes and brewing techniques — clear steps, ratios, and tips for better coffee at home.',
  keywords: ['coffee recipes', 'brewing guides', 'pour over', 'espresso', 'cold brew', 'V60', 'french press'],
  authors: [{ name: 'Tricha Dwinasty' }],
  creator: 'Tricha Dwinasty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trdwi.vercel.app',
    siteName: 'BrewCraft',
    title: 'BrewCraft — Coffee Recipes & Brewing Guides',
    description: 'Curated coffee recipes and brewing techniques — clear steps, ratios, and tips for better coffee at home.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'BrewCraft Coffee Recipes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrewCraft — Coffee Recipes & Brewing Guides',
    description: 'Curated coffee recipes and brewing techniques.',
    creator: '@trdwi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-stone-50 selection:bg-amber-200 selection:text-coffee-900`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

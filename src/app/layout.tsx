import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Executive Security Services | Professional Protection & Peace of Mind",
    template: "%s | Executive Security Services",
  },
  description:
    "Executive Security Services (ESS) provides tailored security solutions for individuals, businesses, and organizations seeking professional protection and peace of mind.",
  keywords: [
    "Executive Security Services",
    "Security Company",
    "Corporate Protection",
    "Private Security",
    "Security Guard Services",
    "Business Security Solutions",
  ],
  authors: [{ name: "Executive Security Services" }],
  creator: "Executive Security Services",
  publisher: "Executive Security Services",
  metadataBase: new URL("https://www.executivesecurityservices.com"),
  alternates: {
    canonical: "https://www.executivesecurityservices.com",
  },
  openGraph: {
    title: "Executive Security Services",
    description:
      "Tailored professional security solutions for businesses and individuals. Trusted protection, peace of mind, and reliability you can count on.",
    url: "https://www.executivesecurityservices.com",
    siteName: "Executive Security Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/public/images/logo.jpg", 
        width: 1200,
        height: 630,
        alt: "Executive Security Services - Professional Security Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Security Services | Trusted Protection & Peace of Mind",
    description:
      "Explore tailored security solutions with Executive Security Services — ensuring your safety, privacy, and peace of mind.",
    creator: "@executivesecurity",
    images: ["/public/images/logo.jpg"], // Replace with your actual Twitter image
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

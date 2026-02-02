import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Infinity Engineering Solutions | Leading Engineering Products & Services",
    template: "%s | IES"
  },
  description: "Infinity Engineering Solutions provides cutting-edge electrical, mechanical, and fire safety systems for commercial and industrial projects.",
  metadataBase: new URL("https://www.ies.lk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infinity Engineering Solutions | Leading Engineering Products & Services",
    description: "Infinity Engineering Solutions provides cutting-edge electrical, mechanical, and fire safety systems for commercial and industrial projects.",
    url: "https://www.ies.lk",
    siteName: "Infinity Engineering Solutions",
    locale: "en_US",
    type: "website",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* Using Oswald as Condenso stand-in — replace with local Condenso font files when available */
const condenso = Oswald({
  variable: "--font-condenso",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flaron Tech — Growing Your Digital Presence Naturally",
  description:
    "Flaron Tech is a technology solutions company providing website design, mobile app development, full stack development, documentation, domain registration, web hosting, and email hosting services.",
  keywords: [
    "web development",
    "mobile app development",
    "full stack development",
    "digital services",
    "Flaron Tech",
    "technology solutions",
  ],
  authors: [{ name: "Flaron Tech" }],
  openGraph: {
    title: "Flaron Tech — Growing Your Digital Presence Naturally",
    description:
      "Technology solutions that blend nature-inspired design with cutting-edge innovation.",
    type: "website",
    locale: "en_US",
    siteName: "Flaron Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${condenso.variable} antialiased bg-forest-900 text-beige-100`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Caresmart | Case Management Services in Georgia",
    template: "%s | Caresmart",
  },
  description:
    "Caresmart is a Georgia-based case management company helping individuals and families navigate long-term care through the Elderly and Disabled Waiver Program (EDWP).",
  metadataBase: new URL("https://caresmartllc.net"),
  openGraph: {
    siteName: "Caresmart",
    type: "website",
    locale: "en_US",
    url: "https://caresmartllc.net",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Caresmart — Georgia Case Management & EDWP Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@caresmart",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`} data-scroll-behavior="smooth" style={{ scrollBehavior: "smooth" }}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

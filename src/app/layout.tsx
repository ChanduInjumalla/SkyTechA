import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SKY TECH WINDOWS | Precision Aluminium, uPVC & Architectural Systems Hyderabad",
  description:
    "Leading architectural systems in Hyderabad. Aluminium Domal windows, slim profile doors, 16x45 telescopic partitions, structural glazing, ACP/HPL cladding and turnkey interior execution.",
  metadataBase: new URL("https://skytechwindows.com"),
  keywords: [
    "aluminium windows Hyderabad",
    "Domal aluminium windows",
    "uPVC windows Hyderabad",
    "slim profile doors",
    "structural glazing Hyderabad",
    "ACP cladding Hyderabad",
    "Sky Tech Windows Hayathnagar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#1F1F1F] selection:bg-[#E23744]/20 selection:text-[#E23744] antialiased">
        {/* Skip to Main Content Link for A11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#E23744] text-white font-semibold rounded-full shadow-lg text-xs"
        >
          Skip to main content
        </a>

        {/* Global Architectural Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Global Architectural Footer */}
        <Footer />

        {/* Global Floating WhatsApp Contact Action */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

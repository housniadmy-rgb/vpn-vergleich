import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "VPN Vergleich 2025 – Die besten VPN-Dienste im Test",
    template: "%s | VPNVergleich.de",
  },
  description: "Unabhängiger VPN-Vergleich 2025: Finden Sie den besten VPN-Dienst für Streaming, Sicherheit und Datenschutz. Aktuelle Tests und Preise.",
  keywords: ["VPN", "VPN Vergleich", "bester VPN", "VPN Test", "NordVPN", "ExpressVPN", "Surfshark"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "VPNVergleich.de",
  },
  other: {
    "google-adsense-account": "ca-pub-7676593353613357",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7676593353613357"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className={`${inter.className} min-h-screen bg-background`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

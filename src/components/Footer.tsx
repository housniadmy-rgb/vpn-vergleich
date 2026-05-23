import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl text-white">VPN<span className="text-blue-400">Vergleich</span></span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Unabhängige VPN-Tests und Vergleiche für Ihre Privatsphäre im Internet. Wir helfen Ihnen, den besten VPN-Dienst für Ihre Bedürfnisse zu finden.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              * Einige Links auf dieser Seite sind Affiliate-Links. Wir erhalten eine Provision, wenn Sie über unsere Links kaufen – ohne Mehrkosten für Sie.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">VPN-Vergleiche</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kategorie/vpn" className="hover:text-blue-400 transition-colors">Alle VPNs</Link></li>
              <li><Link href="/vergleich" className="hover:text-blue-400 transition-colors">Vergleichstabelle</Link></li>
              <li><Link href="/vpn/nordvpn" className="hover:text-blue-400 transition-colors">NordVPN Test</Link></li>
              <li><Link href="/vpn/expressvpn" className="hover:text-blue-400 transition-colors">ExpressVPN Test</Link></li>
              <li><Link href="/vpn/surfshark" className="hover:text-blue-400 transition-colors">Surfshark Test</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-white mb-4">Informationen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/impressum" className="hover:text-blue-400 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-blue-400 transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} VPNVergleich.de – Alle Rechte vorbehalten
          </p>
          <p className="text-xs text-gray-500">
            Preise können variieren. Zuletzt aktualisiert: Mai 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

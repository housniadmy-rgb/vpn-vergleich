import type { Metadata } from "next";
import { VergleichTabelle } from "@/components/VergleichTabelle";
import { AdBanner } from "@/components/AdBanner";
import { sortByBewertung } from "@/data/produkte";

export const metadata: Metadata = {
  title: "VPN Vergleichstabelle 2025 – Alle Anbieter im Überblick",
  description: "Detaillierte VPN-Vergleichstabelle 2025: Server, Länder, Protokolle, Preise und mehr. Finden Sie den perfekten VPN für Ihre Bedürfnisse.",
};

const alleVpns = sortByBewertung();

export default function Vergleich() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Vergleichstabelle</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          VPN-Vergleich auf einen Blick
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
          Alle {alleVpns.length} VPN-Dienste in einer übersichtlichen Tabelle. Vergleichen Sie Preis, Server, Sicherheitsfunktionen und mehr.
        </p>
      </div>

      <AdBanner format="horizontal" className="mb-8" />

      <VergleichTabelle produkte={alleVpns} />

      <div className="mt-6 text-sm text-gray-400 dark:text-gray-500">
        * Preise können variieren. Klicken Sie auf den VPN-Namen für aktuelle Angebote. Stand: Mai 2025.
      </div>

      <AdBanner format="horizontal" className="mt-10" />

      {/* Erklärung */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Was bedeuten die Spalten?</h2>
          <dl className="space-y-4">
            {[
              { term: "Server", def: "Anzahl der verfügbaren VPN-Server weltweit. Mehr Server = weniger Überlastung und schnellere Verbindungen." },
              { term: "Länder", def: "In wie vielen Ländern der VPN-Dienst Server betreibt. Wichtig für Geo-Entsperrung von Streaming-Inhalten." },
              { term: "Geräte", def: "Wie viele Geräte Sie gleichzeitig mit einem Konto verbinden können. ∞ bedeutet unbegrenzt." },
              { term: "Kill Switch", def: "Trennt automatisch die Internetverbindung, wenn der VPN ausfällt, um Ihre IP-Adresse zu schützen." },
            ].map(({ term, def }) => (
              <div key={term}>
                <dt className="font-semibold text-gray-900 dark:text-white">{term}</dt>
                <dd className="text-sm text-gray-500 dark:text-gray-400 mt-1">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Worauf achten?</h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span><strong>Für Streaming:</strong> Wählen Sie NordVPN oder ExpressVPN – beide entsperren zuverlässig Netflix und andere Dienste.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span><strong>Für Budget:</strong> Surfshark und PIA bieten hervorragendes Preis-Leistungs-Verhältnis ohne Kompromisse bei der Sicherheit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span><strong>Für Familien:</strong> Surfshark und TunnelBear erlauben unbegrenzte Geräte mit einem einzigen Abo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
              <span><strong>Für Datenschutz:</strong> ProtonVPN (Schweiz) oder PIA (Open Source) für maximalen Datenschutz und Transparenz.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { ProduktCard } from "@/components/ProduktCard";
import { AdBanner } from "@/components/AdBanner";
import { sortByBewertung, sortByPreis, vpnProdukte } from "@/data/produkte";

export const metadata: Metadata = {
  title: "Alle VPN-Dienste im Vergleich 2025",
  description: "Vergleichen Sie alle 8 besten VPN-Dienste 2025: NordVPN, ExpressVPN, Surfshark und mehr. Aktuelle Preise, Tests und Bewertungen.",
};

export default function AlleVPNs() {
  const nachBewertung = sortByBewertung();
  const nachPreis = sortByPreis();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Kopfzeile */}
      <div className="mb-10">
        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">VPN-Vergleich 2025</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Die besten VPN-Dienste im Vergleich
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
          Wir haben {vpnProdukte.length} VPN-Dienste ausführlich getestet und nach Sicherheit, Geschwindigkeit, Preis und Benutzerfreundlichkeit bewertet.
        </p>
      </div>

      <AdBanner format="horizontal" className="mb-10" />

      {/* Sortierung Label */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Nach Bewertung sortiert
        </h2>
        <span className="text-sm text-gray-500">{vpnProdukte.length} VPN-Dienste</span>
      </div>

      {/* Liste */}
      <div className="flex flex-col gap-4 mb-12">
        {nachBewertung.map((vpn, i) => (
          <ProduktCard key={vpn.id} produkt={vpn} rang={i + 1} />
        ))}
      </div>

      <AdBanner format="horizontal" className="mb-12" />

      {/* Günstígste */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Günstigste VPNs zuerst
        </h2>
        <div className="flex flex-col gap-4">
          {nachPreis.slice(0, 3).map((vpn, i) => (
            <ProduktCard key={vpn.id} produkt={vpn} rang={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Check, Shield, Globe, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SterneBewertung } from "@/components/SterneBewertung";
import { BesteWahlBadge } from "@/components/BesteWahlBadge";
import { AffiliateButton } from "@/components/AffiliateButton";
import type { VPNProdukt } from "@/data/produkte";

interface ProduktCardProps {
  produkt: VPNProdukt;
  rang: number;
}

export function ProduktCard({ produkt, rang }: ProduktCardProps) {
  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-lg ${produkt.istBesterWahl ? "ring-2 ring-blue-500" : ""}`}>
      {produkt.istBesterWahl && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
      )}

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Rang & Logo */}
          <div className="flex items-center gap-4 md:w-16 shrink-0">
            <span className="text-2xl font-bold text-gray-300 dark:text-gray-600 w-6 text-center">
              {rang}
            </span>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${produkt.farbe} flex items-center justify-center text-white font-bold text-xl shrink-0`}>
              {produkt.logo}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Link href={`/vpn/${produkt.slug}`} className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {produkt.name}
              </Link>
              {produkt.istBesterWahl && <BesteWahlBadge />}
            </div>
            <SterneBewertung sterne={produkt.sterne} />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{produkt.kurzbeschreibung}</p>

            <div className="flex flex-wrap gap-3 mt-3">
              <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300">
                <Globe className="w-3 h-3" /> {produkt.laender} Länder
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300">
                <Shield className="w-3 h-3" /> {produkt.server.toLocaleString("de-DE")} Server
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300">
                <Monitor className="w-3 h-3" />
                {produkt.gleichzeitigeGeraete === -1 ? "Unbegrenzte Geräte" : `${produkt.gleichzeitigeGeraete} Geräte`}
              </span>
            </div>

            <div className="flex flex-wrap gap-1 mt-2">
              {produkt.features.slice(0, 3).map((f) => (
                <span key={f} className="inline-flex items-center gap-1 text-xs bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                  <Check className="w-2.5 h-2.5" /> {f}
                </span>
              ))}
            </div>
          </div>

          {/* Preis & CTA */}
          <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
            <div className="text-center md:text-right">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {produkt.preisMonat.toFixed(2).replace(".", ",")} €
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">pro Monat</div>
              {produkt.geldZurueck > 0 && (
                <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                  {produkt.geldZurueck} Tage Geld-zurück
                </div>
              )}
            </div>
            <AffiliateButton link={produkt.affiliateLink} name={produkt.name} preis={produkt.preisMonat} />
            <Link href={`/vpn/${produkt.slug}`} className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
              Vollständiger Test →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

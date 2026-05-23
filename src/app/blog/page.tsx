import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdBanner } from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "VPN Blog – Tipps, Tests und News 2025",
  description: "Aktuelle Artikel rund um VPNs, Datenschutz und Online-Sicherheit. Expertentipps vom VPNVergleich-Team.",
};

const blogArtikel = [
  {
    slug: "bester-vpn-2025",
    titel: "Der beste VPN 2025: Unser großer Test",
    zusammenfassung: "Wir haben über 20 VPN-Dienste getestet und stellen Ihnen die 8 besten vor. Unser Fazit: NordVPN liegt knapp vor ExpressVPN.",
    datum: "15. Mai 2025",
    lesezeit: "12 Min.",
    kategorie: "Test",
    farbe: "bg-blue-500",
  },
  {
    slug: "vpn-streaming-netflix",
    titel: "VPN für Netflix: Welcher funktioniert wirklich?",
    zusammenfassung: "Nicht jeder VPN entsperrt Netflix zuverlässig. Wir haben die besten VPNs für Streaming getestet und zeigen, welche wirklich funktionieren.",
    datum: "10. Mai 2025",
    lesezeit: "8 Min.",
    kategorie: "Streaming",
    farbe: "bg-red-500",
  },
  {
    slug: "vpn-datenschutz-erklaert",
    titel: "Wie schützt ein VPN Ihre Privatsphäre wirklich?",
    zusammenfassung: "Viele glauben, ein VPN mache sie komplett anonym. Wir erklären, was ein VPN tatsächlich schützt und wo die Grenzen liegen.",
    datum: "5. Mai 2025",
    lesezeit: "10 Min.",
    kategorie: "Datenschutz",
    farbe: "bg-purple-500",
  },
  {
    slug: "kostenloses-vpn-gefahr",
    titel: "Kostenlose VPNs: Diese Risiken sollten Sie kennen",
    zusammenfassung: "Kostenlose VPNs klingen verlockend, können aber Ihre Sicherheit gefährden. Wir erklären warum und welche Alternativen es gibt.",
    datum: "28. April 2025",
    lesezeit: "7 Min.",
    kategorie: "Sicherheit",
    farbe: "bg-orange-500",
  },
  {
    slug: "vpn-geschwindigkeit-test",
    titel: "VPN-Geschwindigkeit im Test 2025",
    zusammenfassung: "Wir haben die Verbindungsgeschwindigkeit der Top-VPNs gemessen. Überraschend: Die Unterschiede sind größer als gedacht.",
    datum: "20. April 2025",
    lesezeit: "15 Min.",
    kategorie: "Test",
    farbe: "bg-green-500",
  },
  {
    slug: "vpn-protokolle-erklaert",
    titel: "WireGuard vs OpenVPN: Welches Protokoll ist besser?",
    zusammenfassung: "OpenVPN ist erprobt, WireGuard ist schneller. Wir erklären die Unterschiede und welches Protokoll Sie wählen sollten.",
    datum: "12. April 2025",
    lesezeit: "9 Min.",
    kategorie: "Technik",
    farbe: "bg-indigo-500",
  },
];

const kategoriefarben: Record<string, string> = {
  Test: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  Streaming: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
  Datenschutz: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
  Sicherheit: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
  Technik: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300",
};

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">VPN-Wissen</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">VPN Blog</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Expertenwissen rund um VPNs, Datenschutz und Online-Sicherheit vom VPNVergleich-Team.
        </p>
      </div>

      <AdBanner format="horizontal" className="mb-10" />

      <div className="grid md:grid-cols-2 gap-6">
        {blogArtikel.map((artikel) => (
          <Card key={artikel.slug} className="group hover:shadow-lg transition-shadow overflow-hidden">
            <div className={`h-2 ${artikel.farbe}`} />
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${kategoriefarben[artikel.kategorie] ?? "bg-gray-100 text-gray-600"}`}>
                  <Tag className="w-3 h-3 inline mr-1" />
                  {artikel.kategorie}
                </span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {artikel.titel}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {artikel.zusammenfassung}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {artikel.datum}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {artikel.lesezeit}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AdBanner format="horizontal" className="mt-10" />
    </div>
  );
}

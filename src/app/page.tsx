import Link from "next/link";
import { Shield, Zap, Lock, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProduktCard } from "@/components/ProduktCard";
import { AdBanner } from "@/components/AdBanner";
import { FAQSection } from "@/components/FAQSection";
import { sortByBewertung } from "@/data/produkte";

const topVpns = sortByBewertung().slice(0, 3);

const faqItems = [
  {
    frage: "Was ist ein VPN und wozu brauche ich es?",
    antwort: "Ein VPN (Virtual Private Network) verschlüsselt Ihren Internetverkehr und verbirgt Ihre IP-Adresse. Es schützt Ihre Privatsphäre in öffentlichen WLANs, ermöglicht Zugang zu geo-blockierten Inhalten und schützt Ihre Daten vor Hackern und neugierigen ISPs."
  },
  {
    frage: "Welcher VPN ist der beste im Jahr 2025?",
    antwort: "NordVPN ist unser Testsieger 2025 dank seiner Kombination aus Geschwindigkeit, Sicherheit und Preis-Leistungs-Verhältnis. Für Budget-Nutzer empfehlen wir Surfshark, und für maximale Geschwindigkeit ist ExpressVPN die beste Wahl."
  },
  {
    frage: "Ist die Nutzung eines VPNs legal?",
    antwort: "Ja, in Deutschland und den meisten westlichen Ländern ist die Nutzung eines VPNs vollkommen legal. VPNs werden von Unternehmen, Journalisten und Privatpersonen weltweit zum Schutz ihrer Daten verwendet."
  },
  {
    frage: "Verlangsamt ein VPN meine Internetverbindung?",
    antwort: "Moderne VPNs wie NordVPN oder ExpressVPN verlangsamen Ihre Verbindung minimal – oft unter 10%. Bei Premium-VPNs mit WireGuard-Protokoll ist der Geschwindigkeitsunterschied im Alltag kaum spürbar."
  }
];

export default function Startseite() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Aktuell: Mai 2025 – Alle Preise geprüft
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Den besten VPN finden –{" "}
              <span className="text-blue-300">schnell & unabhängig</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Wir vergleichen die 8 besten VPN-Dienste 2025 für Sie. Ehrliche Tests, aktuelle Preise, keine versteckten Empfehlungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kategorie/vpn">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold gap-2 w-full sm:w-auto">
                  Alle VPNs vergleichen <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/vergleich">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 w-full sm:w-auto">
                  Vergleichstabelle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, titel: "Unabhängig getestet", text: "Keine bezahlten Rankings" },
              { icon: Zap, titel: "Täglich aktuell", text: "Aktuelle Preise & Angebote" },
              { icon: Lock, titel: "Datenschutz", text: "DSGVO-konform" },
              { icon: Globe, titel: "8 VPNs", text: "Umfassender Vergleich" },
            ].map(({ icon: Icon, titel, text }) => (
              <div key={titel} className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">{titel}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdBanner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdBanner format="horizontal" />
      </div>

      {/* Top 3 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Top 3 VPNs 2025</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Unsere Testsieger nach Bewertung</p>
          </div>
          <Link href="/kategorie/vpn" className="hidden md:flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline">
            Alle 8 VPNs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {topVpns.map((vpn, i) => (
            <ProduktCard key={vpn.id} produkt={vpn} rang={i + 1} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/kategorie/vpn">
            <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 font-semibold">
              Alle 8 VPNs anzeigen <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* AdBanner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <AdBanner format="horizontal" />
      </div>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FAQSection items={faqItems} />
      </section>
    </div>
  );
}

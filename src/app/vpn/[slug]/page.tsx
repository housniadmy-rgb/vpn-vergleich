import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, X, Shield, Globe, Monitor, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SterneBewertung } from "@/components/SterneBewertung";
import { BesteWahlBadge } from "@/components/BesteWahlBadge";
import { AffiliateButton } from "@/components/AffiliateButton";
import { LeadButton } from "@/components/LeadButton";
import { AdBanner } from "@/components/AdBanner";
import { FAQSection } from "@/components/FAQSection";
import { getProduktBySlug, vpnProdukte } from "@/data/produkte";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return vpnProdukte.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) return { title: "VPN nicht gefunden" };
  return {
    title: `${produkt.name} Test 2025 – Bewertung, Preis & Erfahrungen`,
    description: `${produkt.name} im Test: ${produkt.kurzbeschreibung}. Aktuelle Preise ab ${produkt.preisMonat.toFixed(2).replace(".", ",")} €/Monat. Jetzt vergleichen!`,
  };
}

export default function ProduktSeite({ params }: Props) {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) notFound();

  const faqItems = [
    {
      frage: `Ist ${produkt.name} sicher?`,
      antwort: `Ja, ${produkt.name} verwendet starke Verschlüsselung (AES-256) und hat eine verifizierte No-Logs-Richtlinie. ${produkt.noLogs ? "Externe Audits bestätigen die Datenschutzversprechen." : ""}`,
    },
    {
      frage: `Wie viel kostet ${produkt.name}?`,
      antwort: `${produkt.name} kostet ab ${produkt.preisMonat.toFixed(2).replace(".", ",")} € pro Monat beim Jahresabo. Es gibt eine ${produkt.geldZurueck > 0 ? `${produkt.geldZurueck}-tägige Geld-zurück-Garantie` : "begrenzte Testmöglichkeit"}.`,
    },
    {
      frage: `Auf wie vielen Geräten kann ich ${produkt.name} nutzen?`,
      antwort: produkt.gleichzeitigeGeraete === -1
        ? `${produkt.name} erlaubt unbegrenzte gleichzeitige Geräteverbindungen mit einem Konto.`
        : `${produkt.name} erlaubt bis zu ${produkt.gleichzeitigeGeraete} gleichzeitige Geräteverbindungen.`,
    },
    {
      frage: `Funktioniert ${produkt.name} mit Netflix?`,
      antwort: `${produkt.name} funktioniert mit den meisten Streaming-Diensten, darunter Netflix, Disney+, Amazon Prime Video und BBC iPlayer. Die Verfügbarkeit kann je nach Region variieren.`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/kategorie/vpn" className="hover:text-blue-600">VPN</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-white">{produkt.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${produkt.farbe} flex items-center justify-center text-white font-bold text-3xl shrink-0`}>
          {produkt.logo}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{produkt.name}</h1>
            {produkt.istBesterWahl && <BesteWahlBadge />}
          </div>
          <SterneBewertung sterne={produkt.sterne} groesse="lg" />
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">{produkt.kurzbeschreibung}</p>
        </div>
      </div>

      {/* AdBanner oben */}
      <AdBanner format="horizontal" className="mb-8" />

      {/* Sticky CTA */}
      <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                Ab {produkt.preisMonat.toFixed(2).replace(".", ",")} € <span className="text-lg font-normal text-gray-500">/ Monat</span>
              </div>
              {produkt.geldZurueck > 0 && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  {produkt.geldZurueck} Tage Geld-zurück-Garantie
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[280px]">
              <AffiliateButton link={produkt.affiliateLink} name={produkt.name} preis={produkt.preisMonat} vollBreite groesse="lg" />
              <LeadButton vpnName={produkt.name} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schnellübersicht */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Globe, label: "Länder", wert: `${produkt.laender}` },
          { icon: Shield, label: "Server", wert: produkt.server >= 1000 ? `${(produkt.server / 1000).toFixed(0)}k+` : `${produkt.server}` },
          { icon: Monitor, label: "Geräte", wert: produkt.gleichzeitigeGeraete === -1 ? "Unbegrenzt" : `${produkt.gleichzeitigeGeraete}` },
          { icon: Clock, label: "Geld-zurück", wert: produkt.geldZurueck > 0 ? `${produkt.geldZurueck} Tage` : "Nein" },
        ].map(({ icon: Icon, label, wert }) => (
          <Card key={label}>
            <CardContent className="p-4 text-center">
              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900 dark:text-white">{wert}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Beschreibung */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{produkt.name} im Test 2025</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">{produkt.beschreibung}</p>
        </CardContent>
      </Card>

      {/* Vor- und Nachteile */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" /> Vorteile
            </h3>
            <ul className="space-y-2">
              {produkt.vorteile.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-red-400" /> Nachteile
            </h3>
            <ul className="space-y-2">
              {produkt.nachteile.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Technische Details */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-500" /> Technische Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Protokolle</span>
                <span className="font-medium text-gray-900 dark:text-white text-right">{produkt.protokolle.join(", ")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Kill Switch</span>
                <span className={`font-medium ${produkt.killswitch ? "text-green-600" : "text-red-500"}`}>
                  {produkt.killswitch ? "Ja" : "Nein"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">No-Logs-Richtlinie</span>
                <span className={`font-medium ${produkt.noLogs ? "text-green-600" : "text-red-500"}`}>
                  {produkt.noLogs ? "Ja (verifiziert)" : "Nein"}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Server</span>
                <span className="font-medium text-gray-900 dark:text-white">{produkt.server.toLocaleString("de-DE")}+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Länder</span>
                <span className="font-medium text-gray-900 dark:text-white">{produkt.laender}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Gleichzeitige Geräte</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {produkt.gleichzeitigeGeraete === -1 ? "Unbegrenzt" : produkt.gleichzeitigeGeraete}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Funktionen auf einen Blick</h3>
          <div className="flex flex-wrap gap-2">
            {produkt.features.map((f) => (
              <Badge key={f} variant="secondary" className="text-sm py-1 px-3">
                <Check className="w-3 h-3 mr-1.5 text-green-500" /> {f}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AdBanner Mitte */}
      <AdBanner format="rectangle" className="mb-8" />

      {/* CTA unten */}
      <div className="flex flex-col gap-3 mb-10">
        <AffiliateButton link={produkt.affiliateLink} name={produkt.name} preis={produkt.preisMonat} vollBreite groesse="lg" />
        <LeadButton vpnName={produkt.name} />
      </div>

      {/* FAQ */}
      <FAQSection items={faqItems} titel={`${produkt.name} – Häufige Fragen`} />

      {/* AdBanner unten */}
      <AdBanner format="horizontal" className="mt-8" />
    </div>
  );
}

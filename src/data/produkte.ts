export interface VPNProdukt {
  id: string;
  slug: string;
  name: string;
  sterne: number;
  preisMonat: number;
  preisJahr: number;
  istBesterWahl: boolean;
  kurzbeschreibung: string;
  beschreibung: string;
  affiliateLink: string;
  logo: string;
  farbe: string;
  features: string[];
  vorteile: string[];
  nachteile: string[];
  server: number;
  laender: number;
  gleichzeitigeGeraete: number;
  protokolle: string[];
  killswitch: boolean;
  noLogs: boolean;
  geldZurueck: number;
  kategorien: string[];
}

export const vpnProdukte: VPNProdukt[] = [
  {
    id: "1",
    slug: "nordvpn",
    name: "NordVPN",
    sterne: 4.8,
    preisMonat: 3.99,
    preisJahr: 47.88,
    istBesterWahl: true,
    kurzbeschreibung: "Der beste VPN-Dienst mit hervorragender Sicherheit und Geschwindigkeit",
    beschreibung: "NordVPN ist einer der beliebtesten VPN-Dienste weltweit und bietet eine hervorragende Kombination aus Geschwindigkeit, Sicherheit und Benutzerfreundlichkeit. Mit über 6.000 Servern in 61 Ländern ist NordVPN ideal für Streaming, Torrenting und den Schutz Ihrer Online-Privatsphäre.",
    affiliateLink: "https://nordvpn.com/?aff=bestvpnvergle-21",
    logo: "N",
    farbe: "from-blue-600 to-blue-800",
    features: ["6.400+ Server", "61 Länder", "6 Geräte", "Kill Switch", "No-Logs-Richtlinie"],
    vorteile: [
      "Sehr schnelle Verbindungsgeschwindigkeit",
      "Hervorragende Sicherheitsfunktionen",
      "Große Serveranzahl",
      "Zuverlässiges Streaming (Netflix, Disney+)",
      "Doppelte VPN-Verschlüsselung",
      "24/7 Kundensupport"
    ],
    nachteile: [
      "Etwas teurer als Konkurrenten",
      "Desktop-App könnte moderner sein"
    ],
    server: 6400,
    laender: 61,
    gleichzeitigeGeraete: 6,
    protokolle: ["NordLynx (WireGuard)", "OpenVPN", "IKEv2/IPSec"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 30,
    kategorien: ["streaming", "sicherheit", "geschwindigkeit"]
  },
  {
    id: "2",
    slug: "surfshark",
    name: "Surfshark",
    sterne: 4.6,
    preisMonat: 2.49,
    preisJahr: 29.88,
    istBesterWahl: false,
    kurzbeschreibung: "Günstigster Premium-VPN mit unbegrenzten Geräten",
    beschreibung: "Surfshark bietet ein hervorragendes Preis-Leistungs-Verhältnis und ist besonders attraktiv durch die unbegrenzte Anzahl gleichzeitiger Geräteverbindungen. Mit robusten Sicherheitsfunktionen und einem wachsenden Servernetzwerk ist Surfshark eine ausgezeichnete Wahl für Familien und Nutzer mit vielen Geräten.",
    affiliateLink: "https://surfshark.com/?aff=bestvpnvergle-21",
    logo: "S",
    farbe: "from-teal-500 to-teal-700",
    features: ["3.200+ Server", "100 Länder", "Unbegrenzte Geräte", "CleanWeb", "No-Logs"],
    vorteile: [
      "Unbegrenzte gleichzeitige Verbindungen",
      "Sehr günstiger Preis",
      "CleanWeb Werbeblocker inklusive",
      "MultiHop-Funktion",
      "100 Länder verfügbar"
    ],
    nachteile: [
      "Geschwindigkeit schwankt manchmal",
      "Kleineres Servernetzwerk als NordVPN"
    ],
    server: 3200,
    laender: 100,
    gleichzeitigeGeraete: -1,
    protokolle: ["WireGuard", "OpenVPN", "IKEv2"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 30,
    kategorien: ["budget", "familie", "streaming"]
  },
  {
    id: "3",
    slug: "expressvpn",
    name: "ExpressVPN",
    sterne: 4.7,
    preisMonat: 6.67,
    preisJahr: 80.04,
    istBesterWahl: false,
    kurzbeschreibung: "Premium-VPN für maximale Geschwindigkeit und Zuverlässigkeit",
    beschreibung: "ExpressVPN gilt als einer der schnellsten und zuverlässigsten VPN-Dienste auf dem Markt. Mit seinem proprietären Lightway-Protokoll bietet ExpressVPN außergewöhnliche Verbindungsgeschwindigkeiten und ist besonders beliebt bei Streamern und Nutzern in Ländern mit starker Internetzensur.",
    affiliateLink: "https://expressvpn.com/?aff=bestvpnvergle-21",
    logo: "E",
    farbe: "from-red-500 to-red-700",
    features: ["3.000+ Server", "94 Länder", "8 Geräte", "Lightway-Protokoll", "TrustedServer"],
    vorteile: [
      "Konstanteste Geschwindigkeit im Test",
      "Funktioniert in China zuverlässig",
      "Exzellenter Kundensupport",
      "Proprietäres Lightway-Protokoll",
      "TrustedServer-Technologie (RAM-only)"
    ],
    nachteile: [
      "Einer der teuersten VPN-Dienste",
      "Begrenzt auf 8 Geräte"
    ],
    server: 3000,
    laender: 94,
    gleichzeitigeGeraete: 8,
    protokolle: ["Lightway", "OpenVPN", "IKEv2", "L2TP/IPSec"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 30,
    kategorien: ["geschwindigkeit", "streaming", "sicherheit", "china"]
  },
  {
    id: "4",
    slug: "cyberghost",
    name: "CyberGhost",
    sterne: 4.4,
    preisMonat: 2.19,
    preisJahr: 26.28,
    istBesterWahl: false,
    kurzbeschreibung: "Benutzerfreundlicher VPN mit dedizierten Streaming-Servern",
    beschreibung: "CyberGhost ist bekannt für seine benutzerfreundliche Oberfläche und die speziell optimierten Streaming-Server. Mit über 9.000 Servern in 91 Ländern bietet CyberGhost eines der größten Servernetzwerke und ist besonders gut für Streaming-Dienste wie Netflix und BBC iPlayer geeignet.",
    affiliateLink: "https://cyberghost.com/?aff=bestvpnvergle-21",
    logo: "C",
    farbe: "from-yellow-500 to-orange-600",
    features: ["9.000+ Server", "91 Länder", "7 Geräte", "Streaming-optimiert", "No-Logs"],
    vorteile: [
      "Größtes Servernetzwerk",
      "Dedizierte Streaming-Server",
      "Sehr benutzerfreundlich",
      "Günstiger Langzeit-Tarif",
      "Automatischer HTTPS-Redirect"
    ],
    nachteile: [
      "Kurzzeit-Tarife sehr teuer",
      "Funktioniert nicht gut in China",
      "Transparenzberichte könnten besser sein"
    ],
    server: 9000,
    laender: 91,
    gleichzeitigeGeraete: 7,
    protokolle: ["WireGuard", "OpenVPN", "IKEv2"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 45,
    kategorien: ["budget", "streaming", "anfaenger"]
  },
  {
    id: "5",
    slug: "protonvpn",
    name: "ProtonVPN",
    sterne: 4.5,
    preisMonat: 4.99,
    preisJahr: 59.88,
    istBesterWahl: false,
    kurzbeschreibung: "Sicherheitsfokussierter VPN aus der Schweiz mit kostenloser Option",
    beschreibung: "ProtonVPN kommt vom selben Team, das ProtonMail entwickelt hat, und legt besonderen Wert auf Datenschutz und Sicherheit. Der Dienst hat seinen Sitz in der Schweiz und bietet als einer der wenigen VPN-Anbieter eine echte kostenlose Option ohne Datenweitergabe an Dritte.",
    affiliateLink: "https://protonvpn.com/?aff=bestvpnvergle-21",
    logo: "P",
    farbe: "from-purple-500 to-purple-700",
    features: ["6.500+ Server", "67 Länder", "10 Geräte", "Secure Core", "Open Source"],
    vorteile: [
      "Kostenlose Version verfügbar",
      "Open-Source-Code",
      "Secure Core (Multi-Hop)",
      "Schweizer Datenschutzgesetze",
      "Netshield (Werbeblocker)",
      "Bis zu 10 Geräte"
    ],
    nachteile: [
      "Kostenlose Version sehr eingeschränkt",
      "Etwas teurer als Budget-Alternativen",
      "App-Oberfläche weniger intuitiv"
    ],
    server: 6500,
    laender: 67,
    gleichzeitigeGeraete: 10,
    protokolle: ["WireGuard", "OpenVPN", "IKEv2"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 30,
    kategorien: ["sicherheit", "datenschutz", "kostenlos"]
  },
  {
    id: "6",
    slug: "private-internet-access",
    name: "Private Internet Access",
    sterne: 4.3,
    preisMonat: 1.99,
    preisJahr: 23.88,
    istBesterWahl: false,
    kurzbeschreibung: "Günstigster VPN mit anpassbaren Sicherheitseinstellungen",
    beschreibung: "Private Internet Access (PIA) ist einer der günstigsten VPN-Anbieter und bietet trotzdem starke Datenschutzfunktionen. Mit Open-Source-Apps und der Möglichkeit, Verschlüsselungseinstellungen anzupassen, ist PIA besonders bei technikaffinen Nutzern beliebt.",
    affiliateLink: "https://privateinternetaccess.com/?aff=bestvpnvergle-21",
    logo: "P",
    farbe: "from-green-600 to-green-800",
    features: ["35.000+ Server", "84 Länder", "10 Geräte", "Open Source", "MACE Blocker"],
    vorteile: [
      "Günstigster Premium-VPN",
      "Riesiges Servernetzwerk",
      "Open-Source-Apps",
      "Anpassbare Verschlüsselung",
      "Eingebauter Werbeblocker (MACE)"
    ],
    nachteile: [
      "US-Gerichtsbarkeit",
      "Nicht ideal für China",
      "Oberfläche etwas komplex für Anfänger"
    ],
    server: 35000,
    laender: 84,
    gleichzeitigeGeraete: 10,
    protokolle: ["WireGuard", "OpenVPN", "IKEv2"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 30,
    kategorien: ["budget", "sicherheit", "fortgeschrittene"]
  },
  {
    id: "7",
    slug: "vyprvpn",
    name: "VyprVPN",
    sterne: 4.2,
    preisMonat: 5.00,
    preisJahr: 60.00,
    istBesterWahl: false,
    kurzbeschreibung: "VPN mit proprietärem Chameleon-Protokoll für zensierte Regionen",
    beschreibung: "VyprVPN betreibt sein gesamtes Servernetzwerk selbst und verlässt sich nicht auf Drittanbieter. Das proprietäre Chameleon-Protokoll macht VyprVPN besonders effektiv in Ländern mit starker VPN-Blockierung wie China oder Iran.",
    affiliateLink: "https://vyprvpn.com/?aff=bestvpnvergle-21",
    logo: "V",
    farbe: "from-indigo-500 to-indigo-700",
    features: ["700+ Server", "64 Länder", "5 Geräte", "Chameleon-Protokoll", "VyprDNS"],
    vorteile: [
      "Eigene Server (kein Drittanbieter)",
      "Chameleon-Protokoll umgeht Blockierungen",
      "VyprDNS verhindert DNS-Leaks",
      "Transparente Sicherheitsaudits"
    ],
    nachteile: [
      "Kleines Servernetzwerk",
      "Nur 5 gleichzeitige Geräte",
      "Kein Werbeblocker"
    ],
    server: 700,
    laender: 64,
    gleichzeitigeGeraete: 5,
    protokolle: ["Chameleon", "WireGuard", "OpenVPN", "IKEv2"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 30,
    kategorien: ["sicherheit", "china", "datenschutz"]
  },
  {
    id: "8",
    slug: "tunnelbear",
    name: "TunnelBear",
    sterne: 4.0,
    preisMonat: 3.33,
    preisJahr: 39.96,
    istBesterWahl: false,
    kurzbeschreibung: "Benutzerfreundlichster VPN für Einsteiger mit kostenloser Option",
    beschreibung: "TunnelBear ist für seine verspielte und intuitive Benutzeroberfläche bekannt und damit ideal für VPN-Einsteiger. Der Dienst bietet eine kostenlose Version mit 2GB monatlichem Datenlimit und legt besonderen Wert auf Transparenz durch regelmäßige unabhängige Sicherheitsaudits.",
    affiliateLink: "https://tunnelbear.com/?aff=bestvpnvergle-21",
    logo: "T",
    farbe: "from-amber-500 to-amber-700",
    features: ["5.000+ Server", "47 Länder", "Unbegrenzte Geräte", "GhostBear", "Kostenlos"],
    vorteile: [
      "Einfachste Benutzeroberfläche",
      "Kostenlose Version (2GB/Monat)",
      "Regelmäßige Sicherheitsaudits",
      "Unbegrenzte Geräte",
      "GhostBear für verschlüsselte Regionen"
    ],
    nachteile: [
      "Kleines Servernetzwerk",
      "Keine erweiterten Funktionen",
      "Durchschnittliche Geschwindigkeit",
      "Kostenlose Version sehr limitiert"
    ],
    server: 5000,
    laender: 47,
    gleichzeitigeGeraete: -1,
    protokolle: ["OpenVPN", "IKEv2"],
    killswitch: true,
    noLogs: true,
    geldZurueck: 0,
    kategorien: ["anfaenger", "kostenlos", "budget"]
  }
];

export function getProduktBySlug(slug: string): VPNProdukt | undefined {
  return vpnProdukte.find(p => p.slug === slug);
}

export function getBesteWahl(): VPNProdukt | undefined {
  return vpnProdukte.find(p => p.istBesterWahl);
}

export function sortByBewertung(): VPNProdukt[] {
  return [...vpnProdukte].sort((a, b) => b.sterne - a.sterne);
}

export function sortByPreis(): VPNProdukt[] {
  return [...vpnProdukte].sort((a, b) => a.preisMonat - b.preisMonat);
}

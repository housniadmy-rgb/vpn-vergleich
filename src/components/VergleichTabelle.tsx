import Link from "next/link";
import { Check, X } from "lucide-react";
import { SterneBewertung } from "@/components/SterneBewertung";
import type { VPNProdukt } from "@/data/produkte";

interface VergleichTabelleProps {
  produkte: VPNProdukt[];
}

export function VergleichTabelle({ produkte }: VergleichTabelleProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <th className="text-left p-4 font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-gray-50 dark:bg-gray-800 min-w-[140px]">
              VPN
            </th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">Bewertung</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">Preis/Monat</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[80px]">Server</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[80px]">Länder</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[90px]">Geräte</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[80px]">Kill Switch</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[80px]">No-Logs</th>
            <th className="text-center p-4 font-semibold text-gray-700 dark:text-gray-300 min-w-[90px]">Geld-zurück</th>
          </tr>
        </thead>
        <tbody>
          {produkte.map((p, i) => (
            <tr
              key={p.id}
              className={`border-b border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors ${
                p.istBesterWahl ? "bg-blue-50/50 dark:bg-blue-950/10" : i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/50"
              }`}
            >
              <td className="p-4 sticky left-0 bg-inherit">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.farbe} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {p.logo}
                  </div>
                  <div>
                    <Link href={`/vpn/${p.slug}`} className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {p.name}
                    </Link>
                    {p.istBesterWahl && (
                      <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">★ Beste Wahl</div>
                    )}
                  </div>
                </div>
              </td>
              <td className="p-4 text-center">
                <SterneBewertung sterne={p.sterne} groesse="sm" zeigeBewertung={true} />
              </td>
              <td className="p-4 text-center font-bold text-gray-900 dark:text-white">
                {p.preisMonat.toFixed(2).replace(".", ",")} €
              </td>
              <td className="p-4 text-center text-gray-600 dark:text-gray-300">
                {p.server >= 1000 ? `${(p.server / 1000).toFixed(0)}k+` : p.server}
              </td>
              <td className="p-4 text-center text-gray-600 dark:text-gray-300">{p.laender}</td>
              <td className="p-4 text-center text-gray-600 dark:text-gray-300">
                {p.gleichzeitigeGeraete === -1 ? "∞" : p.gleichzeitigeGeraete}
              </td>
              <td className="p-4 text-center">
                {p.killswitch ? (
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center">
                {p.noLogs ? (
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center text-gray-600 dark:text-gray-300">
                {p.geldZurueck > 0 ? `${p.geldZurueck}T` : "Nein"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

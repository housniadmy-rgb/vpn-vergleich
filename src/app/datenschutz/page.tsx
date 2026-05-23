import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von VPNVergleich.de gemäß DSGVO",
};

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">1. Datenschutz auf einen Blick</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">2. Datenerfassung auf dieser Website</h2>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Wie erfassen wir Ihre Daten?</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. über unser Kontaktformular für den kostenlosen VPN-Vergleich. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (Logdaten, Cookies).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">3. Google AdSense</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Diese Website verwendet Google AdSense, einen Webwerbedienst der Google LLC. Google AdSense verwendet Cookies und Web Beacons, um Ihnen personalisierte Werbung anzuzeigen. Sie können die Personalisierung von Werbung in den Google-Einstellungen deaktivieren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">4. Affiliate-Links</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Diese Website enthält Affiliate-Links zu Drittanbietern. Wenn Sie auf einen dieser Links klicken und einen Kauf tätigen, können diese Drittanbieter Cookies setzen. Lesen Sie bitte die Datenschutzrichtlinien der jeweiligen Anbieter für weitere Informationen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">5. Ihre Rechte</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">6. Kontakt</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Bei Fragen zum Datenschutz wenden Sie sich an: datenschutz@vpnvergleich.de
          </p>
        </section>

        <p className="text-sm text-gray-400 dark:text-gray-500 mt-8">
          Stand: Mai 2025
        </p>
      </div>
    </div>
  );
}

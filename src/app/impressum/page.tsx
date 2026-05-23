import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von VPNVergleich.de – Rechtliche Angaben gemäß § 5 TMG",
};

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Impressum</h1>

      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="text-gray-600 dark:text-gray-300 space-y-1">
            <p className="font-semibold text-gray-900 dark:text-white">VPNVergleich.de</p>
            <p>Berlinstr. 37</p>
            <p>55411 Bingen am Rhein</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Kontakt</h2>
          <div className="text-gray-600 dark:text-gray-300 space-y-1">
            <p>E-Mail: housniadmy@yahoo.de</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Haftung für Inhalte</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Affiliate-Hinweis</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Diese Website enthält Affiliate-Links. Wenn Sie über diese Links einkaufen, erhalten wir eine Provision vom Anbieter. Für Sie entstehen dadurch keine zusätzlichen Kosten. Die Empfehlungen auf dieser Seite spiegeln unsere ehrliche Meinung wider und werden nicht durch Provisionen beeinflusst.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Urheberrecht</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}

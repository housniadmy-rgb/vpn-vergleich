import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-8xl font-bold text-blue-200 dark:text-blue-900 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Seite nicht gefunden</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        Die gesuchte Seite existiert leider nicht. Besuchen Sie unsere VPN-Vergleichsseite, um den besten VPN zu finden.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Zur Startseite</Button>
        </Link>
        <Link href="/kategorie/vpn">
          <Button variant="outline">VPNs vergleichen</Button>
        </Link>
      </div>
    </div>
  );
}

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AffiliateButtonProps {
  link: string;
  name: string;
  preis: number;
  groesse?: "sm" | "default" | "lg";
  vollBreite?: boolean;
}

export function AffiliateButton({ link, name, preis, groesse = "default", vollBreite = false }: AffiliateButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer sponsored" className={vollBreite ? "w-full block" : ""}>
      <Button
        size={groesse}
        className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold gap-2 ${vollBreite ? "w-full" : ""}`}
      >
        <ExternalLink className="w-4 h-4" />
        {name} für {preis.toFixed(2).replace(".", ",")} €/Monat
      </Button>
    </a>
  );
}

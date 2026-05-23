import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BesteWahlBadge() {
  return (
    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none gap-1 font-bold">
      <Trophy className="w-3 h-3" />
      Beste Wahl
    </Badge>
  );
}

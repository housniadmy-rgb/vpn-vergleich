import { Star } from "lucide-react";

interface SterneBewertungProps {
  sterne: number;
  zeigeBewertung?: boolean;
  groesse?: "sm" | "md" | "lg";
}

export function SterneBewertung({ sterne, zeigeBewertung = true, groesse = "md" }: SterneBewertungProps) {
  const iconGroesse = groesse === "sm" ? "w-3 h-3" : groesse === "lg" ? "w-6 h-6" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((stern) => (
        <Star
          key={stern}
          className={`${iconGroesse} ${
            stern <= Math.floor(sterne)
              ? "fill-yellow-400 text-yellow-400"
              : stern - 0.5 <= sterne
              ? "fill-yellow-200 text-yellow-400"
              : "fill-gray-200 text-gray-300 dark:fill-gray-600 dark:text-gray-500"
          }`}
        />
      ))}
      {zeigeBewertung && (
        <span className="ml-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
          {sterne.toFixed(1)}
        </span>
      )}
    </div>
  );
}

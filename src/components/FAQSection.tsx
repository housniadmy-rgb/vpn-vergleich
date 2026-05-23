"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  frage: string;
  antwort: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  titel?: string;
}

export function FAQSection({ items, titel = "Häufig gestellte Fragen" }: FAQSectionProps) {
  const [offen, setOffen] = useState<number | null>(null);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{titel}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setOffen(offen === i ? null : i)}
            >
              <span className="font-semibold text-gray-900 dark:text-white pr-4">{item.frage}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${offen === i ? "rotate-180" : ""}`}
              />
            </button>
            {offen === i && (
              <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                {item.antwort}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

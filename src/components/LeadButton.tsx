"use client";

import { useState } from "react";
import { Mail, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeadButtonProps {
  vpnName: string;
}

export function LeadButton({ vpnName }: LeadButtonProps) {
  const [offen, setOffen] = useState(false);
  const [email, setEmail] = useState("");
  const [gesendet, setGesendet] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setGesendet(true);
      setTimeout(() => {
        setOffen(false);
        setGesendet(false);
        setEmail("");
      }, 2500);
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 font-semibold gap-2"
        onClick={() => setOffen(true)}
      >
        <Mail className="w-4 h-4" />
        Kostenlosen Vergleich erhalten
      </Button>

      {offen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Kostenloser VPN-Vergleich
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Erhalten Sie unseren detaillierten {vpnName}-Vergleich per E-Mail
                </p>
              </div>
              <button onClick={() => setOffen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {gesendet ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  Vielen Dank! Wir haben Ihnen die Informationen gesendet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="ihre@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Vergleich kostenlos erhalten
                </Button>
                <p className="text-xs text-gray-400 text-center">
                  Kein Spam. Abmeldung jederzeit möglich. Ihre Daten sind sicher.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Header() {
  const [menuOffen, setMenuOffen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/kategorie/vpn", label: "Alle VPNs" },
    { href: "/vergleich", label: "Vergleich" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span>VPN<span className="text-blue-600">Vergleich</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Theme wechseln</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOffen(!menuOffen)}
            >
              {menuOffen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            <Link href="/kategorie/vpn" className="hidden md:block">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                VPN finden
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOffen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 py-1"
                  onClick={() => setMenuOffen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/kategorie/vpn" onClick={() => setMenuOffen(false)}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">
                  VPN finden
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

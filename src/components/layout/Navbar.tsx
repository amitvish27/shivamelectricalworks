"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import company from "@/data/company.json";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services & Panels" },
  { href: "/clients/", label: "Clients" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact & RFQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-primary text-techgray border-b border-surface text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 font-mono">
            <span className="text-amber-400 font-semibold">
              GOVT. LICENSED CONTRACTOR
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">
              GSTIN: {company.gstin}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="hidden md:inline">
              Hubs: {company.serviceHubs.join(" • ")}
            </span>
            <span className="font-mono text-amber-400 font-semibold">
              BOQ &lt; {company.turnaroundHours} HRS
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="bg-primary/95 backdrop-blur border-b border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="h-9 sm:h-10 w-14 sm:w-20 rounded bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-slate-700/50 group-hover:border-copper transition-colors">
              <Image
                src="/images/logo.png"
                alt={company.name}
                width={140}
                height={70}
                className="max-h-full max-w-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-display font-extrabold text-white tracking-tight text-sm sm:text-base leading-tight whitespace-nowrap">
                {company.name}
              </div>
              <div className="text-[11px] text-slate-300 leading-tight hidden sm:block">
                Turnkey HT/LT Works &amp; Panels
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-surface text-amber-400"
                      : "text-slate-200 hover:text-white hover:bg-surface/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${company.contact.whatsappNumber}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-200 hover:text-amber-400 transition-colors p-1.5 sm:p-0"
              aria-label="Call Direct Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{company.contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-slate-200 hover:text-white hover:bg-surface"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-primary border-t border-surface px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-surface text-amber-400 font-semibold"
                      : "text-slate-200 hover:bg-surface hover:text-amber-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="border-t border-surface/70 pt-2 mt-2">
              <a
                href={`tel:${company.contact.whatsappNumber}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-amber-400 px-3 py-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Desk: {company.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

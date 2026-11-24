import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import company from "@/data/company.json";

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-200 border-t border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-20 rounded bg-white p-1 flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src="/images/logo.png"
                alt={company.name}
                width={140}
                height={70}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="font-display font-bold text-white text-lg">
              {company.name}
            </h3>
          </div>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Government-licensed electrical contracting and engineering firm
            delivering turnkey HT/LT power distribution, custom control panels,
            captive DG installations, and statutory compliance across{" "}
            {company.serviceHubs.join(", ")}.
          </p>
          <div className="mt-4 text-xs font-mono text-amber-400 space-y-1">
            <div>License: {company.licenseClass}</div>
            <div>GSTIN: {company.gstin}</div>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link href="/about/" className="hover:text-amber-400">About Us &amp; Safety</Link></li>
            <li><Link href="/services/" className="hover:text-amber-400">Services &amp; BOQ Catalog</Link></li>
            <li><Link href="/clients/" className="hover:text-amber-400">Clients &amp; Projects</Link></li>
            <li><Link href="/gallery/" className="hover:text-amber-400">Project Gallery</Link></li>
            <li><Link href="/contact/" className="hover:text-amber-400">Contact &amp; Direct RFQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
            Core Capabilities
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>HT Substations &amp; Overhead Lines</li>
            <li>LT Transformers, Cabling &amp; Bus Ducts</li>
            <li>PCC, MCC, APFC, VFD &amp; AMF Panels</li>
            <li>DG Sets &amp; Captive Power Systems</li>
            <li>Lightning, Surge &amp; Earthing Grids</li>
            <li>Inspectorate Liaisoning &amp; AMC</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
            Commercial Desk
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{company.contact.registeredOffice}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{company.contact.phoneDisplay}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{company.contact.email}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{company.contact.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved. •{" "}
        {company.domain}
      </div>
    </footer>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Mail, MapPin, Phone, Scale, ShieldAlert } from "lucide-react";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: `Terms of Use | ${company.name}`,
  description: `Terms of use and non-binding commercial quotation terms for ${company.name} website.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-techgray">
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 border-b border-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2.5 font-mono text-xs text-amber-400 uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Commercial &amp; Website Terms</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Effective Date: November 24, 2026 • Domain: {company.domain}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <p>
              By accessing or using <strong className="text-primary">{company.domain}</strong>, you agree to comply with and be bound by the following Terms of Use. If you disagree with any part of these terms, please refrain from using this website.
            </p>
          </div>

          {/* Section 1 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                1
              </span>
              Website Purpose
            </h2>
            <p className="mt-3 text-slate-600">
              This website provides general commercial and technical information regarding the electrical contracting capabilities, HT/LT power distribution services, control panel fabrication specifications, project execution portfolio, and quotation request tools of <strong className="text-primary">{company.name}</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                2
              </span>
              Enquiries, BOQ Cart &amp; Quotations (Non-Binding)
            </h2>
            <div className="mt-3 space-y-3 text-slate-600">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900 text-xs sm:text-sm">
                <strong className="block font-semibold mb-1">Non-Binding Commercial Estimate Notice:</strong>
                Submitting a <strong className="text-primary">Project BOQ</strong> or <strong className="text-primary">Quick Project Enquiry</strong> through this website, email, or WhatsApp constitutes an exploratory <strong className="text-primary">Request for Quotation (RFQ)</strong> only and does <span className="underline font-bold">not</span> establish a binding contract or finalized work order.
              </div>
              <ul className="space-y-2.5 pl-1 pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-copper-dark font-bold">•</span>
                  <span>
                    All technical specifications, bill of quantities (BOQ), material brands/makes, project milestones, pricing, taxes (GST), freight, delivery schedules, and utility liaisoning scope are confirmed solely via a formal written quotation, purchase order, or executed contract mutually agreed in writing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper-dark font-bold">•</span>
                  <span>
                    Preliminary turnaround estimates (e.g. &lt; {company.turnaroundHours} hours) represent operational targets and may vary based on project complexity or drawing availability.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                3
              </span>
              Technical Specifications &amp; Visuals
            </h2>
            <p className="mt-3 text-slate-600">
              Service descriptions, panel fabrication gauges (such as 16 SWG CRCA), switchgear ratings, SLD previews, and site photographs showcased on this website are indicative and illustrative.
            </p>
            <p className="mt-2 text-slate-600">
              Final site engineering designs, load calculations, protection co-ordinations, and fabrication drawings are strictly governed by client-approved Single Line Diagrams (SLDs), applicable Indian Standards (IS), and Chief Electrical Inspectorate norms.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                4
              </span>
              Intellectual Property
            </h2>
            <p className="mt-3 text-slate-600">
              All website text, layout architecture, trade names, branding emblems (including the SEW mark), and site photography published on <strong className="text-primary">{company.domain}</strong> belong to <strong className="text-primary">{company.name}</strong> (or are used under license/permission) and may not be reproduced, copied, altered, or redistributed for commercial use without express prior written consent.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                5
              </span>
              Limitation of Liability
            </h2>
            <p className="mt-3 text-slate-600">
              While we make diligent efforts to maintain accurate and up-to-date information, <strong className="text-primary">{company.name}</strong> makes no warranties regarding continuous website uptime and disclaims liability for any direct, indirect, incidental, or consequential damages resulting from the use of this website or premature reliance on indicative estimates prior to formal engineering sign-off.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                6
              </span>
              Governing Law &amp; Jurisdiction
            </h2>
            <p className="mt-3 text-slate-600">
              These Terms of Use are governed by and construed in accordance with the laws of the Republic of India. Any disputes, controversies, or claims arising out of or in connection with the use of this website or exploratory RFQs shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra, India.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                7
              </span>
              Contact Details &amp; Commercial Office
            </h2>
            <div className="mt-4 bg-techgray border border-slate-200 rounded-xl p-5 space-y-3 font-sans">
              <div className="font-display font-bold text-base text-primary">
                {company.name}
              </div>
              <div className="text-xs font-mono text-copper-dark">
                License: {company.licenseClass} • GSTIN: {company.gstin}
              </div>
              <div className="text-sm text-slate-600 space-y-2 pt-1 border-t border-slate-200">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-copper-dark shrink-0 mt-0.5" />
                  <span>{company.contact.registeredOffice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-copper-dark shrink-0" />
                  <a href={`mailto:${company.contact.email}`} className="text-primary hover:text-copper-dark font-medium underline">
                    {company.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-copper-dark shrink-0" />
                  <span>{company.contact.phoneDisplay}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

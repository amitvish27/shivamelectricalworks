import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Lock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Privacy Policy and data practices for ${company.name} website, BOQ cart, and commercial RFQ inquiries.`,
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-4 h-4" />
            <span>Statutory &amp; Compliance Information</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
            Privacy Policy
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
              <strong className="text-primary">{company.name}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              respects your privacy and is committed to protecting the business and personal information you share when
              visiting <strong className="text-primary">{company.domain}</strong> or submitting a Request for Quotation (RFQ).
            </p>
          </div>

          {/* Section 1 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                1
              </span>
              Information We Collect
            </h2>
            <p className="mt-3">
              When you use our <strong className="text-primary">Quick Project Enquiry</strong> form or{" "}
              <strong className="text-primary">Project BOQ Builder</strong>, we collect only the details you voluntarily provide:
            </p>
            <ul className="mt-3 space-y-2.5 text-slate-600 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-dark shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-800">Contact Details:</strong> Full name, company/organization name,
                  mobile/WhatsApp number, and business email address.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-dark shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-800">Project &amp; RFQ Details:</strong> Selected BOQ line items,
                  execution scope, requirement category, and project location/scope notes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-dark shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-800">Technical &amp; Security Data:</strong> Standard server logs and
                  anti-spam verification signals (such as Cloudflare Turnstile) used strictly to keep the website secure
                  and prevent automated abuse.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                2
              </span>
              Browser Storage (localStorage) &amp; Cookies
            </h2>
            <ul className="mt-3 space-y-2 text-slate-600 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>
                  Our <strong className="text-slate-800">Live BOQ Cart</strong> uses your browser&apos;s local storage (
                  <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-primary">localStorage</code>)
                  solely to remember the services, panels, and specifications you add while navigating between pages.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>
                  We do <strong className="text-slate-800">not</strong> use advertising cookies, marketing trackers, or third-party behavioral profiling pixels.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                3
              </span>
              How We Use Your Information
            </h2>
            <p className="mt-3">We use the information you submit solely to:</p>
            <ul className="mt-2.5 space-y-2 text-slate-600 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>Review your project requirements and prepare technical BOQs, commercial quotations, and engineering proposals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>Contact you via phone, WhatsApp, or email regarding your RFQ, drawing review, site assessment, or execution milestones.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>Maintain internal commercial records for active enquiries, tax compliance, and statutory utility coordination.</span>
              </li>
            </ul>
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 text-xs sm:text-sm text-emerald-900 font-medium">
              We do <span className="font-bold underline">not</span> sell, rent, trade, or monetize your contact or commercial details to third parties under any circumstances.
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                4
              </span>
              Third-Party Services &amp; Data Sharing
            </h2>
            <ul className="mt-3 space-y-3 text-slate-600 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>
                  <strong className="text-slate-800">Email &amp; Hosting Infrastructure:</strong> Official RFQ submissions are processed through our secure server infrastructure and transactional email delivery providers strictly to deliver your enquiry to our engineering desk.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-copper-dark font-bold">•</span>
                <span>
                  <strong className="text-slate-800">WhatsApp:</strong> If you choose <strong className="text-slate-800">WhatsApp BOQ</strong> or <strong className="text-slate-800">Send via WhatsApp</strong>, your pre-formatted enquiry is opened directly inside your WhatsApp application and is governed by WhatsApp&apos;s own privacy policies and terms.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                5
              </span>
              Data Retention &amp; Your Rights
            </h2>
            <p className="mt-3 text-slate-600">
              We retain RFQ and project enquiry records only for as long as needed to evaluate your specifications, conduct commercial negotiations, or meet statutory accounting, tax, and GST reporting requirements under Indian law.
            </p>
            <p className="mt-2 text-slate-600">
              You may request access to, correction of, or deletion of your contact records at any time by contacting our commercial desk below.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-t border-slate-100 pt-6">
            <h2 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <span className="font-mono text-sm text-copper-dark bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                6
              </span>
              Contact for Privacy Enquiries
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

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Compass, Target } from "lucide-react";
import company from "@/data/company.json";
import clientsData from "@/data/clients.json";
import galleryData from "@/data/gallery.json";

const CAPABILITY_CARDS = [
  { title: "HT Works & Substations", desc: "Indoor/outdoor substations, pole structures, RMUs, metering cubicles, and Inspectorate approvals." },
  { title: "LT Distribution & Cabling", desc: "Distribution transformers, armoured cabling, GI/HDG cable trays, bus ducts, and site electrification." },
  { title: "Control Panels & DBs", desc: "16 SWG CRCA dust- & vermin-proof PCC, MCC, APFC, VFD, AMF/DG panels, and outdoor feeder pillars." },
  { title: "Captive Power (DG Sets)", desc: "Generator sizing, erection, ventilation, earthing, cooling systems, and statutory testing." },
  { title: "Protection & ELV Systems", desc: "Lightning arresters, surge protection (SPD), maintenance-free earthing, exothermic welding, fire & security wiring." },
  { title: "O&M & Direct RFQ Desk", desc: "Preventive/breakdown AMC, utility liaisoning, and fast-track commercial estimates." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section: Company Value Prop (Left) + Mission & Vision Highlight Card (Right) */}
      <section className="bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface border border-copper/40 rounded-full px-3.5 py-1 text-xs font-mono text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Government Licensed Electrical Contractor • {company.licenseClass}</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight">
              {company.hero.headline}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {company.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-hover text-white font-bold text-sm px-5 py-3 rounded-md transition-colors"
              >
                <span>Explore Services &amp; Spec Builder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery/"
                className="inline-flex items-center gap-2 bg-surface hover:bg-slate-700 border border-slate-600 text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors"
              >
                <span>View Project Gallery</span>
              </Link>
              <a
                href={`https://wa.me/${company.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* 4 Trust Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {company.hero.trustMetrics.map((m) => (
                <div
                  key={m.value}
                  className="bg-surface/80 border border-slate-700 rounded-lg p-3"
                >
                  <div className="font-mono font-bold text-amber-400 text-sm">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Company Purpose, Vision & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-surface border border-slate-700 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-700/80">
                <div className="h-10 w-20 rounded bg-white p-1 flex items-center justify-center shadow-sm">
                  <Image
                    src="/images/logo.png"
                    alt={company.name}
                    width={140}
                    height={70}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs font-bold text-amber-400">
                    EST. {company.foundingYear}
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Govt. Licensed Contractor
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                {company.about.vision}
              </p>

              <div className="border-t border-slate-700 my-5" />

              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <ul className="mt-2.5 space-y-2 text-sm text-slate-200">
                {company.about.mission.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-700 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400">
                  EST. {company.foundingYear}
                </span>
                <Link
                  href="/about/"
                  className="font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Company Profile &amp; Safety</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs font-semibold text-copper-dark uppercase tracking-wider">
              Corporate Profile
            </div>
            <h2 className="font-display font-bold text-3xl text-primary">
              Engineered Execution Backed by Statutory Compliance
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {company.about.snapshot}
            </p>
            <Link
              href="/about/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-copper-dark hover:underline pt-1"
            >
              <span>Read Full Company Profile, Safety &amp; QA Standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5 bg-techgray border border-slate-200 rounded-xl p-6 space-y-3">
            <div className="font-mono text-xs font-semibold text-copper-dark uppercase">
              Leadership &amp; Licensing
            </div>
            <h3 className="font-display font-bold text-xl text-primary">
              {company.about.director.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {company.about.director.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-techgray py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div className="font-mono text-xs font-semibold text-copper-dark uppercase tracking-wider">
                Turnkey Scope
              </div>
              <h2 className="font-display font-bold text-3xl text-primary mt-1">
                Explore Our Engineering Capabilities
              </h2>
            </div>
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-copper-dark hover:underline"
            >
              <span>Open Spec Builder &amp; 18-Item BOQ Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITY_CARDS.map((card) => (
              <Link
                key={card.title}
                href="/services/"
                className="bg-white border border-slate-200 hover:border-copper rounded-xl p-6 transition-all shadow-sm group"
              >
                <h3 className="font-display font-bold text-lg text-surface group-hover:text-copper-dark transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {card.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-mono font-semibold text-copper-dark">
                  <span>View BOQ Items</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us [01] - [08] */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs font-semibold text-copper-dark uppercase tracking-wider">
            Client Value Proposition
          </div>
          <h2 className="font-display font-bold text-3xl text-primary mt-1 mb-8">
            Why Choose {company.name}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {company.whyChooseUs.map((item) => (
              <div
                key={item.code}
                className="bg-techgray border border-slate-200 rounded-xl p-5"
              >
                <div className="font-mono text-xs font-bold text-copper-dark">
                  [{item.code}]
                </div>
                <h3 className="font-display font-bold text-base text-primary mt-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section className="bg-techgray py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs font-semibold text-copper-dark uppercase tracking-wider">
                Workmanship &amp; Site Execution
              </div>
              <h2 className="font-display font-bold text-3xl text-primary mt-1">
                Project Gallery Highlights
              </h2>
            </div>
            <Link
              href="/gallery/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-copper-dark hover:underline"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryData.items.slice(0, 3).map((g) => (
              <Link
                key={g.id}
                href="/gallery/"
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-copper transition-colors"
              >
                <Image
                  src={g.image}
                  alt={g.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover bg-primary"
                />
                <div className="p-4">
                  <div className="font-mono text-[11px] font-semibold text-copper-dark">
                    {g.category}
                  </div>
                  <h3 className="font-display font-bold text-base text-primary mt-1">
                    {g.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="bg-white py-14 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="font-display font-bold text-2xl text-primary">
              Trusted Across Industrial &amp; Commercial Sectors
            </h2>
            <Link
              href="/clients/"
              className="text-sm font-semibold text-copper-dark hover:underline inline-flex items-center gap-1"
            >
              <span>View Completed &amp; Ongoing Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clientsData.logoPlaceholders.map((c) => (
              <div
                key={c.name}
                className="bg-techgray border border-slate-200 rounded-lg py-5 px-4 text-center"
              >
                <div className="font-display font-bold text-sm text-surface">
                  {c.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{c.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom RFQ Conversion Band */}
      <section className="bg-surface text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              Planning an HT/LT Project or Control Panel Requirement?
            </h2>
            <p className="text-slate-300 mt-1.5 text-sm sm:text-base">
              Configure your BOQ on our Services page or submit a direct enquiry
              for an estimate within {company.turnaroundHours} hours.
            </p>
          </div>
          <Link
            href="/contact/"
            className="shrink-0 inline-flex items-center gap-2 bg-copper hover:bg-copper-hover text-white font-bold text-sm px-6 py-3.5 rounded-md transition-colors"
          >
            <span>Initiate Project RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

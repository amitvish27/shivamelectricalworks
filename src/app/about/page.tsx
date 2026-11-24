import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldAlert, Wrench, Users } from "lucide-react";
import company from "@/data/company.json";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
            Corporate Profile &amp; Credentials
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-1">
            About {company.name}
          </h1>
          <p className="text-slate-300 mt-3 max-w-3xl">
            Government-licensed electrical contractors delivering turnkey HT/LT
            infrastructure, engineered control panels, and statutory approvals.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display font-bold text-2xl text-surface">
              Our Story &amp; Statutory Liaisoning
            </h2>
            {company.about.fullStory.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 bg-techgray border border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
              <div className="h-11 w-24 rounded bg-white p-1.5 flex items-center justify-center border border-slate-200 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt={company.name}
                  width={140}
                  height={70}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="font-mono text-xs font-bold text-copper-dark bg-amber-50 px-2 py-1 rounded border border-amber-200">
                Govt. Licensed
              </span>
            </div>
            <div className="font-mono text-xs font-semibold text-copper-dark uppercase">
              Leadership Desk
            </div>
            <h3 className="font-display font-bold text-xl text-primary mt-1">
              {company.about.director.name}
            </h3>
            <div className="text-sm font-medium text-surface">
              {company.about.director.designation}
            </div>
            <p className="text-sm text-slate-700 mt-3 leading-relaxed">
              {company.about.director.bio}
            </p>
            <div className="mt-5 pt-4 border-t border-slate-300 font-mono text-xs text-primary space-y-1">
              <div>License: {company.licenseClass}</div>
              <div>GSTIN: {company.gstin}</div>
              <div>Established: {company.foundingYear}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-techgray py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-surface mb-6">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {company.about.coreValues.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <h3 className="font-display font-bold text-base text-primary">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Testing Equipment */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-2 text-surface font-display font-bold text-xl mb-4">
              <Users className="w-5 h-5 text-copper-dark" />
              <h2>Key-Core Team Strength</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {company.about.teamStrength.map((t) => (
                <div
                  key={t.role}
                  className="bg-techgray rounded-lg px-3.5 py-2.5 flex items-center justify-between text-sm"
                >
                  <span className="text-slate-700">{t.role}</span>
                  <span className="font-mono font-bold text-primary">{t.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-2 text-surface font-display font-bold text-xl mb-4">
              <Wrench className="w-5 h-5 text-copper-dark" />
              <h2>In-House Tools &amp; Testing Equipment</h2>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {company.about.testingEquipment.map((eq) => (
                <li key={eq} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper-dark shrink-0 mt-0.5" />
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Safety & QA */}
      <section className="bg-surface text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Site Safety Precautions</span>
            </div>
            <h2 className="font-display font-bold text-2xl mb-4">
              Mandatory PPE &amp; Hazard-Free Execution
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-200">
              {company.about.safetyPpe.map((p) => (
                <li key={p.item}>
                  <strong className="text-white">{p.item}:</strong> {p.use}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs text-amber-400 uppercase mb-2">
              Quality Assurance Protocol
            </div>
            <h2 className="font-display font-bold text-2xl mb-4">
              Tested Before Every Handover
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              {company.about.qualityAssurance}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

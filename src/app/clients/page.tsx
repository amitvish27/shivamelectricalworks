"use client";

import React, { useState } from "react";
import clientsData from "@/data/clients.json";

export default function ClientsPage() {
  const [tab, setTab] = useState<"completed" | "ongoing">("completed");

  const rows =
    tab === "completed"
      ? clientsData.completedProjects
      : clientsData.ongoingProjects;

  return (
    <div>
      <section className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
            Project Track Record
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-1">
            Our Clients &amp; Sectors Served
          </h1>
          <p className="text-slate-300 mt-3 max-w-3xl">{clientsData.intro}</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-display font-bold text-xl text-surface mb-4">
              Industries Served
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {clientsData.industries.map((ind) => (
                <span
                  key={ind}
                  className="bg-techgray border border-slate-200 text-primary text-xs font-semibold px-3.5 py-2 rounded-full"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-surface mb-4">
              Key Clients (Dummy Placeholders)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {clientsData.logoPlaceholders.map((c) => (
                <div
                  key={c.name}
                  className="bg-techgray border border-slate-200 rounded-xl py-6 px-4 text-center"
                >
                  <div className="font-display font-bold text-sm text-primary">
                    {c.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{c.sector}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
              <button
                type="button"
                onClick={() => setTab("completed")}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  tab === "completed"
                    ? "bg-primary text-amber-400"
                    : "bg-techgray text-surface hover:bg-slate-200"
                }`}
              >
                Major Completed Projects
              </button>
              <button
                type="button"
                onClick={() => setTab("ongoing")}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  tab === "ongoing"
                    ? "bg-primary text-amber-400"
                    : "bg-techgray text-surface hover:bg-slate-200"
                }`}
              >
                Ongoing Projects
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-techgray text-surface font-mono text-xs uppercase">
                  <tr>
                    <th className="py-3.5 px-4">Sr.</th>
                    <th className="py-3.5 px-4">Client Name</th>
                    <th className="py-3.5 px-4">Project Scope</th>
                    <th className="py-3.5 px-4">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {rows.map((r) => (
                    <tr key={r.sr} className="hover:bg-techgray">
                      <td className="py-3.5 px-4 font-mono text-copper-dark font-bold">
                        {r.sr}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-primary">
                        {r.client}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">{r.scope}</td>
                      <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                        {r.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

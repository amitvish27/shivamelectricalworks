"use client";

import React, { useState } from "react";
import { Layers, PlusCircle } from "lucide-react";
import catalogData from "@/data/catalog.json";
import { useBoqCart } from "@/context/BoqCartContext";

export default function SpecBuilder() {
  const { loadPackage } = useBoqCart();
  const [sector, setSector] = useState(catalogData.specBuilder.sectors[0]);
  const [voltage, setVoltage] = useState(catalogData.specBuilder.voltages[0]);
  const [scope, setScope] = useState(catalogData.executionScopes[0]);

  const presetIds =
    (catalogData.specBuilder.presets as Record<string, string[]>)[voltage] ||
    catalogData.specBuilder.presets["Combined HT + LT Turnkey"];

  const previewItems = presetIds
    .map((id) => catalogData.items.find((i) => i.id === id))
    .filter(Boolean);

  return (
    <div className="bg-surface border border-copper/35 rounded-xl p-6 shadow-lg text-white">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
        <div>
          <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
            Rapid Package Configurator
          </div>
          <h2 className="font-display font-bold text-xl sm:text-2xl mt-0.5">
            10-Second Project Spec Builder
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Select your facility type, voltage level, and execution scope to
            pre-load a recommended BOQ package into your quotation cart.
          </p>
        </div>
        <Layers className="w-7 h-7 text-amber-400 shrink-0 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            1. PROJECT SECTOR
          </label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full rounded-md bg-primary border border-slate-600 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-copper"
          >
            {catalogData.specBuilder.sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            2. VOLTAGE / SYSTEM LEVEL
          </label>
          <select
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="w-full rounded-md bg-primary border border-slate-600 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-copper"
          >
            {catalogData.specBuilder.voltages.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            3. EXECUTION SCOPE
          </label>
          <select
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className="w-full rounded-md bg-primary border border-slate-600 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-copper"
          >
            {catalogData.executionScopes.map((sc) => (
              <option key={sc} value={sc}>
                {sc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-primary/80 border border-slate-700 rounded-lg p-4">
        <div className="flex-1">
          <div className="text-[11px] font-mono text-amber-400 mb-1.5">
            RECOMMENDED {previewItems.length}-ITEM PACKAGE
          </div>
          <div className="flex flex-wrap gap-2">
            {previewItems.map(
              (item) =>
                item && (
                  <span
                    key={item.id}
                    className="inline-flex items-center gap-1.5 bg-surface border border-slate-600 rounded px-2.5 py-1 text-xs text-slate-200"
                  >
                    <span>{item.title}</span>
                    <span className="font-mono text-[10px] text-amber-400">
                      {item.tag}
                    </span>
                  </span>
                )
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => loadPackage(presetIds, sector, scope)}
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-hover text-white font-bold text-sm py-3 px-5 rounded-md transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Load Package into BOQ Cart</span>
        </button>
      </div>
    </div>
  );
}

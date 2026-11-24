"use client";

import React, { useMemo, useState } from "react";
import { Plus, Search, Check } from "lucide-react";
import catalogData from "@/data/catalog.json";
import { useBoqCart } from "@/context/BoqCartContext";
import SpecBuilder from "@/components/rfq/SpecBuilder";

export default function ServicesPage() {
  const { items: cartItems, addItem, openCart } = useBoqCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return catalogData.items.filter((item) => {
      const catOk =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.spec.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [selectedCategory, query]);

  return (
    <div>
      <section className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
            Interactive Engineering Catalog
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-1">
            Services, Control Panels &amp; BOQ Builder
          </h1>
          <p className="text-slate-300 mt-3 max-w-3xl">
            Use the 10-Second Spec Builder to load a recommended package, or
            browse individual HT/LT services and control panels to build your
            Live BOQ Cart.
          </p>
        </div>
      </section>

      <section className="bg-techgray py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* 10-Second Spec Builder moved here */}
          <SpecBuilder />

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {catalogData.categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-amber-400"
                      : "bg-white text-surface border border-slate-200 hover:border-copper"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search panels, HT, DG, earthing..."
                className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-300 bg-white text-sm text-primary focus:outline-none focus:border-copper"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => {
              const inCart = cartItems.find((c) => c.id === item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-copper transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold bg-primary text-amber-400 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-lg text-surface mt-3">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.spec}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => addItem(item)}
                      className="inline-flex items-center gap-1.5 bg-copper hover:bg-copper-hover text-white font-bold text-xs px-3.5 py-2 rounded-md transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to BOQ</span>
                    </button>
                    {inCart && (
                      <button
                        type="button"
                        onClick={openCart}
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-whatsapp hover:underline"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>In Cart ({inCart.quantity})</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

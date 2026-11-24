"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import galleryData from "@/data/gallery.json";

export default function GalleryPage() {
  const [category, setCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<
    (typeof galleryData.items)[number] | null
  >(null);

  const visible =
    category === "All"
      ? galleryData.items
      : galleryData.items.filter((i) => i.category === category);

  return (
    <div>
      <section className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
            Site &amp; Panel Portfolio
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-1">
            Project Gallery
          </h1>
          <p className="text-slate-300 mt-3 max-w-3xl">{galleryData.intro}</p>
        </div>
      </section>

      <section className="bg-techgray py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {galleryData.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors ${
                  category === cat
                    ? "bg-primary text-amber-400"
                    : "bg-white text-surface border border-slate-200 hover:border-copper"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveItem(item)}
                className="text-left bg-white border border-slate-200 hover:border-copper rounded-xl overflow-hidden shadow-sm transition-all group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover bg-primary group-hover:scale-[1.02] transition-transform"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-copper-dark font-semibold">
                      {item.category}
                    </span>
                    <span className="text-slate-500">{item.location}</span>
                  </div>
                  <h2 className="font-display font-bold text-base text-primary mt-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-primary/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary px-5 py-3 flex items-center justify-between text-white">
              <span className="font-mono text-xs text-amber-400">
                {activeItem.category} • {activeItem.location}
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1 hover:bg-surface rounded"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full max-h-[60vh] object-contain bg-primary"
            />
            <div className="p-5">
              <h3 className="font-display font-bold text-xl text-primary">
                {activeItem.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1.5">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

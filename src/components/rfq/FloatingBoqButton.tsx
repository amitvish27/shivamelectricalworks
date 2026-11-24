"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { useBoqCart } from "@/context/BoqCartContext";

export default function FloatingBoqButton() {
  const { totalCount, openCart } = useBoqCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-primary hover:bg-surface text-white border border-copper/60 shadow-lg px-4 py-3 rounded-full text-sm font-semibold transition-all"
      aria-label="Open Project BOQ Cart"
    >
      <ShoppingBag className="w-4 h-4 text-amber-400" />
      <span>BOQ Cart</span>
      <span className="bg-copper text-white font-mono text-xs font-bold px-2 py-0.5 rounded-full">
        {totalCount}
      </span>
    </button>
  );
}

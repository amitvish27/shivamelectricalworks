"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import catalogData from "@/data/catalog.json";

export interface BoqItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  spec: string;
  quantity: number;
  sectorContext?: string;
}

interface BoqCartContextValue {
  items: BoqItem[];
  executionScope: string;
  isOpen: boolean;
  totalCount: number;
  setExecutionScope: (scope: string) => void;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<BoqItem, "quantity">) => void;
  loadPackage: (itemIds: string[], sectorContext: string, scope: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "sew_boq_cart_v1";
const BoqCartContext = createContext<BoqCartContextValue | undefined>(undefined);

export function BoqCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BoqItem[]>([]);
  const [executionScope, setExecutionScope] = useState<string>(
    catalogData.executionScopes[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.items)) setItems(parsed.items);
        if (typeof parsed.executionScope === "string") {
          setExecutionScope(parsed.executionScope);
        }
      }
    } catch {
      // Ignore malformed storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items, executionScope })
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [items, executionScope, hydrated]);

  const addItem = (item: Omit<BoqItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const loadPackage = (
    itemIds: string[],
    sectorContext: string,
    scope: string
  ) => {
    const matched = itemIds
      .map((id) => catalogData.items.find((c) => c.id === id))
      .filter((c): c is (typeof catalogData.items)[number] => Boolean(c));

    setExecutionScope(scope);
    setItems((prev) => {
      const next = [...prev];
      for (const m of matched) {
        const idx = next.findIndex((x) => x.id === m.id);
        if (idx >= 0) {
          next[idx] = { ...next[idx], sectorContext };
        } else {
          next.push({
            id: m.id,
            title: m.title,
            category: m.category,
            tag: m.tag,
            spec: m.spec,
            quantity: 1,
            sectorContext,
          });
        }
      }
      return next;
    });
    setIsOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <BoqCartContext.Provider
      value={{
        items,
        executionScope,
        isOpen,
        totalCount,
        setExecutionScope,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        loadPackage,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </BoqCartContext.Provider>
  );
}

export function useBoqCart() {
  const ctx = useContext(BoqCartContext);
  if (!ctx) {
    throw new Error("useBoqCart must be used within a BoqCartProvider");
  }
  return ctx;
}

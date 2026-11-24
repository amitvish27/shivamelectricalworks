"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import catalogData from "@/data/catalog.json";
import company from "@/data/company.json";
import { useBoqCart } from "@/context/BoqCartContext";

export default function BoqCartDrawer() {
  const {
    items,
    executionScope,
    isOpen,
    setExecutionScope,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useBoqCart();

  const [siteName, setSiteName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  if (!isOpen) return null;

  const formatBoqText = (forWhatsapp = false) => {
    const lines = items.map(
      (item, idx) =>
        `${idx + 1}. ${item.title} [${item.tag}] — Qty/Units: ${item.quantity}`
    );
    const parts = [
      `Hello ${company.name} Team,`,
      "",
      "Please share a commercial quotation for the following project requirement:",
      `• Company / Project Site: ${siteName || "[Not specified]"}`,
      `• Contact: ${contactName || "[Not specified]"} (${phone || "No phone"})`,
      `• Execution Scope: ${executionScope}`,
      "• Selected BOQ Line Items:",
      ...(lines.length ? lines : ["(No items selected)"]),
    ];
    if (forWhatsapp) {
      parts.push(
        "",
        "Note: I can attach my BOQ, SLD, or tender drawing directly in this WhatsApp chat if needed."
      );
    }
    return parts.join("\n");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formatBoqText(false));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsapp = () => {
    const url = `https://wa.me/${company.contact.whatsappNumber}?text=${encodeURIComponent(
      formatBoqText(true)
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!items.length) {
      setStatusMsg({ type: "error", text: "Add at least one BOQ item first." });
      return;
    }
    if (!siteName.trim() || !phone.trim()) {
      setStatusMsg({
        type: "error",
        text: "Please enter your Company/Site Name and Mobile number.",
      });
      return;
    }

    const recipient = company.contact.salesEmail || company.contact.email;
    const subject = `[BOQ RFQ] ${siteName.trim()} — ${executionScope} Quote Request`;
    const body = [
      `Hello ${company.name} Team,`,
      "",
      `Please find our Project BOQ requirement below for: ${siteName.trim()}`,
      `• Contact Name: ${contactName.trim() || "N/A"}`,
      `• Mobile / WhatsApp: ${phone.trim()}`,
      `• Email: ${email.trim() || "N/A"}`,
      `• Commercial Scope: ${executionScope}`,
      "",
      formatBoqText(false),
      "",
      "Note: We can attach our SLD drawings, architectural layouts, or tender documents upon request.",
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setStatusMsg({
      type: "success",
      text: "Opening your native email app with pre-filled BOQ items. You can review, attach drawings, and send.",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-primary/75 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-surface text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-16 rounded bg-white p-1 flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src="/images/logo.png"
                alt={company.name}
                width={120}
                height={60}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <div className="font-mono text-[11px] text-amber-400 uppercase tracking-wider">
                Live Quotation Cart
              </div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-bold text-base sm:text-lg">
                  Project BOQ Builder
                </h2>
                <span className="bg-copper text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
                  {items.length} Items
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-1.5 rounded hover:bg-primary/50 text-slate-200"
            aria-label="Close BOQ Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          <div>
            <label className="block font-mono text-xs font-semibold text-surface uppercase mb-1.5">
              Commercial Execution Scope
            </label>
            <select
              value={executionScope}
              onChange={(e) => setExecutionScope(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-techgray px-3 py-2 text-sm text-primary focus:outline-none focus:border-copper"
            >
              {catalogData.executionScopes.map((sc) => (
                <option key={sc} value={sc}>
                  {sc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-semibold text-surface uppercase">
                Selected Line Items ({items.length})
              </span>
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-red-600 hover:underline font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center text-sm text-slate-500">
                Your BOQ cart is empty. Visit{" "}
                <strong className="text-primary">Services &amp; Panels</strong> to
                use the 10-Second Spec Builder or click{" "}
                <strong className="text-primary">+ Add to BOQ</strong> on any
                offering.
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="border border-slate-200 bg-techgray rounded-lg p-3.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-copper-dark">
                            #{idx + 1}
                          </span>
                          <span className="font-mono text-[10px] font-semibold bg-primary text-amber-400 px-1.5 py-0.5 rounded">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-sm text-primary mt-1">
                          {item.title}
                        </h3>
                        {item.sectorContext && (
                          <div className="text-[11px] text-whatsapp font-medium mt-0.5">
                            Sector: {item.sectorContext}
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-red-600 p-1"
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-600">
                        Quantity / Units:
                      </span>
                      <div className="inline-flex items-center border border-slate-300 rounded bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-techgray text-primary"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-mono text-xs font-semibold text-primary">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-techgray text-primary"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submission Details */}
          <form
            id="boq-email-form"
            onSubmit={handleEmailSubmit}
            className="space-y-3 pt-2 border-t border-slate-200"
          >
            <div>
              <label className="block font-mono text-xs font-semibold text-surface uppercase mb-1">
                Company / Project Site Name *
              </label>
              <input
                type="text"
                required
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="e.g. Apex Industries / Taloja MIDC Site"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-primary focus:outline-none focus:border-copper"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs font-semibold text-surface uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-primary focus:outline-none focus:border-copper"
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-semibold text-surface uppercase mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-primary focus:outline-none focus:border-copper"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs font-semibold text-surface uppercase mb-1">
                Business Email (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="projects@company.com"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-primary focus:outline-none focus:border-copper"
              />
            </div>

            {statusMsg && (
              <div
                className={`p-3 rounded-md text-xs font-medium ${
                  statusMsg.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {statusMsg.text}
              </div>
            )}
          </form>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-200 bg-techgray p-4 space-y-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleWhatsapp}
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm py-2.5 px-3 rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp BOQ</span>
            </button>
            <button
              type="submit"
              form="boq-email-form"
              className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-hover text-white font-bold text-sm py-2.5 px-3 rounded-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Official BOQ</span>
            </button>
          </div>
          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-copper-dark hover:underline font-medium"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "BOQ Copied!" : "Copy formatted BOQ text"}</span>
            </button>
            <span className="font-mono text-slate-600">
              Turnaround &lt; {company.turnaroundHours} Hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

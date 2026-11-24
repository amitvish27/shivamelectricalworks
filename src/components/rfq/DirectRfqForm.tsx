"use client";

import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import company from "@/data/company.json";

const REQUIREMENT_TYPES = [
  "HT Installations & Substation Works",
  "LT Distribution, Cabling & Industrial Wiring",
  "Electrical Control Panels & Distribution Boards (PCC / MCC / APFC / VFD / AMF)",
  "DG Set Installation, Earthing & Captive Power",
  "Lightning, Surge Protection & Security/Fire Wiring",
  "Complete Turnkey Electrical EPC + Statutory Approvals",
  "Preventive / Breakdown Maintenance (AMC)",
  "Other",
];

export default function DirectRfqForm() {
  const [fullName, setFullName] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reqType, setReqType] = useState(REQUIREMENT_TYPES[0]);
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleWhatsapp = () => {
    const msg = [
      `Hello ${company.name} Team,`,
      "",
      "New Project RFQ Enquiry:",
      `• Name: ${fullName || "[Not provided]"}`,
      `• Company: ${org || "[Not provided]"}`,
      `• Mobile: ${phone || "[Not provided]"}`,
      `• Requirement: ${reqType}`,
      `• Site & Scope: ${details || "[Not provided]"}`,
      "",
      "Note: I can attach my BOQ / SLD drawing directly in this WhatsApp chat if needed.",
    ].join("\n");
    window.open(
      `https://wa.me/${company.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "DIRECT_RFQ",
          fullName: fullName.trim(),
          company: org.trim(),
          phone: phone.trim(),
          email: email.trim(),
          requirementType: reqType,
          details: details.trim(),
        }),
      });

      let data: { error?: string; referenceId?: string } = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        throw new Error(
          "RFQ service is currently unreachable. Please connect directly via WhatsApp or call us."
        );
      }

      if (!res.ok) throw new Error(data.error || "Submission failed.");

      setResult({
        type: "success",
        text: `Quote Request Received — Ref #${data.referenceId}. Our engineering desk will review your requirement and respond within ${company.turnaroundHours} business hours.`,
      });
      setFullName("");
      setOrg("");
      setPhone("");
      setEmail("");
      setDetails("");
    } catch (err) {
      setResult({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Unable to send RFQ right now. Please use WhatsApp or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="mb-5">
        <span className="font-mono text-xs text-copper-dark font-semibold uppercase">
          Fast-Track Response
        </span>
        <h2 className="font-display font-bold text-2xl text-primary mt-0.5">
          Quick Project Enquiry
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-surface mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rajesh Sharma"
              className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-copper"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-surface mb-1">
              Company / Organization *
            </label>
            <input
              type="text"
              required
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="e.g. Apex Infra Pvt Ltd"
              className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-copper"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-surface mb-1">
              Mobile / WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98XXX XXXXX"
              className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-copper"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-surface mb-1">
              Business Email (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-copper"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-surface mb-1">
            Requirement Type
          </label>
          <select
            value={reqType}
            onChange={(e) => setReqType(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-primary bg-white focus:outline-none focus:border-copper"
          >
            {REQUIREMENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-surface mb-1">
            Project Location &amp; Scope Details *
          </label>
          <textarea
            required
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Mention site city, estimated load (kVA/kW), panel types, HT/LT scope, or target timeline..."
            className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:border-copper"
          />
        </div>

        {result && (
          <div
            className={`p-3.5 rounded-md text-sm font-medium ${
              result.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {result.text}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={handleWhatsapp}
            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm py-3 px-4 rounded-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-hover disabled:opacity-60 text-white font-bold text-sm py-3 px-4 rounded-md transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>{submitting ? "Submitting..." : "Submit Official RFQ"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

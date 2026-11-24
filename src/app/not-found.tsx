import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Home, Phone, Wrench } from "lucide-react";
import company from "@/data/company.json";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-techgray flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-24 rounded bg-white p-1.5 flex items-center justify-center border border-slate-200 shadow-sm">
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={140}
              height={70}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="font-mono text-xs font-bold text-copper-dark uppercase tracking-wider">
          Error 404
        </div>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-primary mt-1">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
          The page or drawing you requested does not exist or may have been moved.
          Explore our services or connect with our commercial desk directly.
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-surface text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center justify-center gap-2 bg-techgray hover:bg-slate-200 border border-slate-300 text-primary text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <Wrench className="w-4 h-4 text-copper-dark" />
            <span>Services &amp; BOQ Builder</span>
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-copper-dark hover:underline mt-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Need Help? Contact Our Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

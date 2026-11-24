import React from "react";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import company from "@/data/company.json";
import DirectRfqForm from "@/components/rfq/DirectRfqForm";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs text-amber-400 uppercase tracking-wider">
            Direct Commercial Desk
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-1">
            Initiate Your Project RFQ or Site Assessment
          </h1>
          <p className="text-slate-300 mt-3 max-w-3xl">
            Have a specific tender, panel specification, or turnkey requirement?
            Submit the quick enquiry form and our engineering desk will respond
            within {company.turnaroundHours} hours.
          </p>
        </div>
      </section>

      <section className="bg-techgray py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="h-10 w-20 rounded bg-white p-1 flex items-center justify-center border border-slate-200 shadow-sm">
                  <Image
                    src="/images/logo.png"
                    alt={company.name}
                    width={120}
                    height={60}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-copper-dark bg-amber-50 px-2 py-1 rounded border border-amber-200">
                  Direct Commercial Desk
                </span>
              </div>
              <div className="flex items-center gap-3 text-surface font-display font-bold text-lg">
                <Phone className="w-5 h-5 text-copper-dark" />
                <h2>Mobile &amp; WhatsApp Desk</h2>
              </div>
              <p className="font-mono text-lg font-bold text-primary mt-2">
                {company.contact.phoneDisplay}
              </p>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {company.contact.workingHours}
              </p>
              <a
                href={`https://wa.me/${company.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-semibold px-4 py-2 rounded-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 text-surface font-display font-bold text-lg">
                <Mail className="w-5 h-5 text-copper-dark" />
                <h2>Official Commercial Emails</h2>
              </div>
              <div className="mt-2 space-y-1 text-sm font-mono text-primary">
                <div>{company.contact.email}</div>
                <div>{company.contact.salesEmail}</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 text-surface font-display font-bold text-lg">
                <MapPin className="w-5 h-5 text-copper-dark" />
                <h2>Office &amp; Fabrication Unit</h2>
              </div>
              <div className="mt-2.5 space-y-3 text-sm text-slate-600">
                <div>
                  <strong className="text-primary block text-xs font-mono uppercase">
                    Registered Office
                  </strong>
                  {company.contact.registeredOffice}
                </div>
                <div>
                  <strong className="text-primary block text-xs font-mono uppercase">
                    Workshop / Panel Unit
                  </strong>
                  {company.contact.workshopAddress}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <DirectRfqForm />
          </div>
        </div>
      </section>
    </div>
  );
}

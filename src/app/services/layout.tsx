import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services, Panels & Interactive BOQ Catalog",
  description:
    "Explore turnkey HT/LT capabilities, custom PCC, MCC, APFC & VFD control panels, DG installations, and build your project BOQ.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

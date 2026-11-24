import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Workmanship Gallery",
  description:
    "View photographs and specifications of our on-site HT substations, custom control panels, bus ducts, cable trays, and captive power setups.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

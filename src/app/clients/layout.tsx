import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Completed Project Portfolio",
  description:
    "Track record of completed and ongoing HT/LT electrical engineering projects across manufacturing, commercial, residential, and healthcare sectors.",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

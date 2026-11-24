import type { Metadata } from "next";
import "./globals.css";
import { BoqCartProvider } from "@/context/BoqCartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BoqCartDrawer from "@/components/rfq/BoqCartDrawer";
import FloatingBoqButton from "@/components/rfq/FloatingBoqButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivamelectricalworks.com"),
  title: {
    default: "Shivam Electrical Works | Turnkey HT/LT Electrical Contracting & Panels",
    template: "%s | Shivam Electrical Works",
  },
  description:
    "Government-licensed electrical contractor delivering turnkey HT/LT installations, custom control panels (PCC, MCC, APFC, VFD, AMF), DG sets, and statutory clearances across Mumbai, Thane, Navi Mumbai, and Pan-India.",
  keywords: [
    "electrical contractor",
    "turnkey HT LT works",
    "control panels",
    "PCC MCC panel manufacturer",
    "substation installation",
    "electrical contractor Mumbai",
    "electrical contractor Thane",
    "statutory electrical approval",
    "Shivam Electrical Works",
  ],
  authors: [{ name: "Shivam Electrical Works" }],
  creator: "Shivam Electrical Works",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shivamelectricalworks.com",
    title: "Shivam Electrical Works | Turnkey HT/LT Electrical Contracting & Panels",
    description:
      "Government-licensed electrical contractor delivering turnkey HT/LT installations, custom control panels, DG sets, and statutory clearances.",
    siteName: "Shivam Electrical Works",
    images: [
      {
        url: "/images/logo.png",
        width: 709,
        height: 352,
        alt: "Shivam Electrical Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Electrical Works | Turnkey HT/LT Electrical Contracting & Panels",
    description:
      "Government-licensed electrical contractor delivering turnkey HT/LT installations, custom control panels, DG sets, and statutory clearances.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <BoqCartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BoqCartDrawer />
          <FloatingBoqButton />
        </BoqCartProvider>
      </body>
    </html>
  );
}

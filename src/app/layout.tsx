import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BoqCartProvider } from "@/context/BoqCartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BoqCartDrawer from "@/components/rfq/BoqCartDrawer";
import FloatingBoqButton from "@/components/rfq/FloatingBoqButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shivam Electrical Works | Turnkey HT/LT Electrical Contracting & Panels",
  description:
    "Government-licensed electrical contractor delivering turnkey HT/LT installations, custom control panels (PCC, MCC, APFC, VFD, AMF), DG sets, and statutory clearances.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}
    >
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

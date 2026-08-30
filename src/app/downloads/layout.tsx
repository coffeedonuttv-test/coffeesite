import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Setup Guide — Firestick, Android TV, Smart TV | Coffee & Donut TV",
  description:
    "Download and set up Coffee & Donut TV IPTV on Amazon Firestick, Android TV, Smart TVs, iPhone, and Android phones. Step-by-step installation guide. Works on all devices.",
  keywords: [
    "IPTV Firestick setup",
    "IPTV download",
    "how to install IPTV",
    "IPTV Android TV",
    "IPTV Smart TV",
    "IPTV setup guide Canada",
    "IPTV iPhone setup",
    "IPTV Smarters",
    "TiviMate IPTV",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/downloads",
  },
  openGraph: {
    title: "IPTV Setup Guide — Works on Firestick, Android TV, Smart TV",
    description:
      "Step-by-step guide to set up Coffee & Donut TV IPTV on any device. Firestick, Android TV, Smart TVs, and more.",
    url: "https://www.coffeedonuttv.com/downloads",
  },
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

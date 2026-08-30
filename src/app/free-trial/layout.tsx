import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Free Trial — 24 Hours Free, No Credit Card | Coffee & Donut TV",
  description:
    "Get instant 24-hour free access to 34,000+ live channels, UFC, NFL, NHL, and 125,000+ movies. No credit card required. Try Canada's best IPTV service free today.",
  keywords: [
    "IPTV free trial",
    "IPTV free trial Canada",
    "free IPTV trial no credit card",
    "try IPTV free",
    "IPTV 24 hour trial",
    "free IPTV access",
  ],
  alternates: {
    canonical: "https://www.coffeedonuttv.com/free-trial",
  },
  openGraph: {
    title: "IPTV Free Trial — 24 Hours Free, No Credit Card",
    description:
      "Try Canada's best IPTV service free for 24 hours. 34,000+ channels, no credit card needed.",
    url: "https://www.coffeedonuttv.com/free-trial",
  },
};

export default function FreeTrialLayout({ children }: { children: React.ReactNode }) {
  return children;
}

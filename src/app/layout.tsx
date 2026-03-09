import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Coffee & Donut TV - Epic Stories. Endless Worlds.",
  description: "A cozy cup of entertainment - brewed daily. Stream 9,500+ Live Channels, 125,000+ Movies & Series, and global content that never sleeps.",
  keywords: ["streaming", "IPTV", "movies", "TV shows", "live channels", "entertainment"],
  openGraph: {
    title: "Coffee & Donut TV - Epic Stories. Endless Worlds.",
    description: "Premium streaming service with 9,500+ channels and 125,000+ movies & series.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Removed react-grab and same-runtime scripts - they were creating unwanted widget boxes */}
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

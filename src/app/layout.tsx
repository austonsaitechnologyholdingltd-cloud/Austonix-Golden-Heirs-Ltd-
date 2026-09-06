import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Austonix Golden Heirs Ltd | Intelligent Technology for Enterprises",
    template: "%s | Austonix",
  },
  description:
    "Austonix Golden Heirs Ltd is a full-service technology company and technology holding company building AI, enterprise software, cloud, cybersecurity, data, and digital infrastructure for intelligent enterprises.",
  keywords: [
    "Austonix",
    "AI",
    "enterprise software",
    "cloud",
    "cybersecurity",
    "digital platforms",
    "Nigeria technology",
    "intelligent enterprises",
    "systems integration",
  ],
  authors: [{ name: "Austonix Golden Heirs Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austonix.com",
    siteName: "Austonix Golden Heirs Ltd",
    title: "Austonix Golden Heirs Ltd | Intelligent Technology for Enterprises",
    description:
      "Full-service technology company and holding company for intelligent enterprises. AI • Software • Cloud • Cybersecurity • Data • Digital Platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austonix Golden Heirs Ltd",
    description: "Intelligent technology. Enterprise infrastructure. Digital capability.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-zinc-100">
        {children}
      </body>
    </html>
  );
}
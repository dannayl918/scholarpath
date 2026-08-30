import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ScholarPath — Your Future Starts With the Right Opportunity.",
    template: "%s | ScholarPath",
  },
  description:
    "Discover universities, scholarships, financial aid and application opportunities matched to your goals.",
  keywords: [
    "ScholarPath",
    "universities",
    "scholarships",
    "international students",
    "financial aid",
    "university applications",
  ],
  applicationName: "ScholarPath",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

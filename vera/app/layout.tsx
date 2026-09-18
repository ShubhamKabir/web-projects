import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERA — Research, connected.",
  description:
    "VERA is a research workspace concept designed to connect sources, evidence, analysis, and structured outputs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

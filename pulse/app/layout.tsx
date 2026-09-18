import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PULSE — Team Workspace",
  description: "A modern project and task management workspace.",
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

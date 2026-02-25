import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMOS - Resource Hub",
  description: "Centralized resource hub for team members",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

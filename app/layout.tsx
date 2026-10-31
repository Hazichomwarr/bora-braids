import type { Metadata, Viewport } from "next";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bora Beauty Club — Demonstration",
  description: "A premium, interactive demonstration experience by Bora Braids.",
  openGraph: { title: "Bora Beauty Club — Demonstration", description: "A premium, interactive demonstration experience by Bora Braids." },
};

export const viewport: Viewport = { themeColor: "#FFF9F5" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="bora-fonts"><body><AppShell>{children}</AppShell></body></html>;
}

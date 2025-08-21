// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = { title: "Editor Portfolio" };
export const viewport: Viewport = { colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar overflow-x-hidden">
      <body>
        <Navbar  />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}

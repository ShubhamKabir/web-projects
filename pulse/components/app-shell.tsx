"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import AppHeader from "@/components/app-header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="min-h-screen lg:pl-[248px]">
        <AppHeader onMenuClick={() => setMobileOpen(true)} />

        <main className="px-5 py-7 md:px-8 md:py-9">
          <div className="mx-auto max-w-[1440px]">{children}</div>
        </main>
      </div>
    </div>
  );
}

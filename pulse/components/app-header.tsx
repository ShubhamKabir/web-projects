"use client";

import { Bell, Menu, Search } from "lucide-react";

type AppHeaderProps = {
  onMenuClick?: () => void;
};

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#e1e3e6] bg-[#f4f5f7]/95 px-5 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg border border-[#e1e3e6] bg-white p-2 text-[#747980] hover:text-[#17191c] lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={19} />
        </button>

        <div className="hidden items-center gap-2 rounded-lg border border-[#e1e3e6] bg-white px-3 py-2 md:flex md:w-[280px]">
          <Search size={16} className="text-[#92969c]" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#a1a5aa]"
          />

          <span className="rounded border border-[#e1e3e6] px-1.5 py-0.5 text-[10px] text-[#92969c]">
            /
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="relative rounded-lg p-2 text-[#747980] hover:bg-white hover:text-[#17191c]"
          aria-label="Notifications"
        >
          <Bell size={19} strokeWidth={1.8} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#247c78]" />
        </button>

        <div className="h-8 w-px bg-[#e1e3e6]" />

        <button className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dce9e7] text-[11px] font-semibold text-[#247c78]">
            SK
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-[#17191c]">Shubham</p>
            <p className="text-[10px] text-[#747980]">Admin</p>
          </div>
        </button>
      </div>
    </header>
  );
}

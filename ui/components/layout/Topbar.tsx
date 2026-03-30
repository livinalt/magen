"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Topbar() {
  return (
    <div className="h-16 bg-[#0F172A] border-b border-gray-800 flex items-center justify-between px-6">
      {/* Left - Search */}
      <input
        placeholder="Search models..."
        className="bg-[#1E293B] px-4 py-2 rounded-lg text-sm outline-none w-64 focus:w-80 transition-all"
      />

      {/* Right - Wallet */}
      <ConnectButton />
    </div>
  );
}
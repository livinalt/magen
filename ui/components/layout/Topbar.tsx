"use client";

export default function Topbar() {
  return (
    <div className="h-16 bg-[#0F172A] border-b border-gray-800 flex items-center justify-between px-6">

      {/* Search */}
      <input
        placeholder="Search models..."
        className="bg-[#1E293B] px-4 py-2 rounded-lg text-sm outline-none w-64"
      />

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Connect Wallet */}
        <button className="bg-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-500">
          Connect Wallet
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-600" />

      </div>
    </div>
  );
}
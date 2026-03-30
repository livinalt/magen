"use client";

import { useState } from "react";

const mockAppeals: any[] = []; // replace with real data

export default function Appeals() {
  const [appeals] = useState(mockAppeals);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Appeals</h1>

      {appeals.length === 0 ? (
        <div className="border border-dashed border-gray-700 rounded-xl p-10 text-center bg-gray-900/40">
          <p className="text-gray-400 text-sm">
            No appeals yet
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Appeals will appear here when decisions are challenged
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {appeals.map((a, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-gray-800 bg-gray-900"
            >
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-gray-400 mt-1">
                {a.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
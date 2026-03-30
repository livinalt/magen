"use client";

import { useState } from "react";

export default function Deploy() {
  const [loading, setLoading] = useState(false);
  const [contractId, setContractId] = useState("");

  const deploy = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/deploy", { method: "POST" });
      const data = await res.json();

      setContractId(data.contractId);
    } catch (err) {
      alert("Deployment failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Deploy Model
      </h1>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <p className="text-sm text-gray-400 mb-3">
          GenLayer Logic
        </p>

        <pre className="text-sm bg-black p-4 rounded-lg overflow-x-auto text-green-400">
{`if ai_model("fraud").predict(tx):
    block_transaction()`}
        </pre>

        <button
          onClick={deploy}
          disabled={loading}
          className={`mt-6 px-4 py-2 rounded-lg font-medium transition ${
            loading
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          {loading ? "Deploying..." : "Deploy Contract"}
        </button>
      </div>

      {/* Success state */}
      {contractId && (
        <div className="mt-6 p-4 rounded-xl border border-green-700 bg-green-900/20">
          <p className="text-sm text-gray-300">
            Contract deployed successfully
          </p>
          <p className="text-xs break-all text-green-400 mt-1">
            {contractId}
          </p>
        </div>
      )}
    </div>
  );
}
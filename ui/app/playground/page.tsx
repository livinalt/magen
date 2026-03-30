"use client";

import { useState } from "react";

type Output = {
  model: string;
  output: string;
  latency: number;
};

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [outputs, setOutputs] = useState<Output[]>([]);
  const [consensus, setConsensus] = useState("");
  const [agreement, setAgreement] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [winner, setWinner] = useState("");
  const [cid, setCid] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  const run = async () => {
    setLoading(true);

    const res = await fetch("/api/run", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setOutputs(data.outputs);
    setConsensus(data.consensus);
    setAgreement(data.agreement);
    setScores(data.scores);
    setWinner(data.winner);
    setCid(data.cid);
    setTxHash(data.txHash);

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Consensus Engine</h1>

      {/* Input */}
      <input
        className="w-full p-3 rounded-lg bg-gray-800 outline-none"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt..."
      />

      <button onClick={run} className="bg-indigo-600 px-6 py-2 rounded-lg">
        {loading ? "Running..." : "Run Consensus"}
      </button>

      {/* Outputs + Voting */}
      <div className="grid md:grid-cols-3 gap-4">
        {outputs.map((o, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border ${
              o.model === winner
                ? "border-green-500 bg-green-900/30"
                : "border-gray-800 bg-gray-900"
            }`}
          >
            <p className="text-xs text-gray-400">
              {o.model} • {o.latency}ms
            </p>

            <p className="text-sm mt-2">{o.output}</p>

            {/* Voting Bar */}
            {scores[i] !== undefined && (
              <div className="mt-3">
                <div className="h-2 bg-gray-700 rounded">
                  <div
                    className="h-2 bg-indigo-500 rounded"
                    style={{ width: `${scores[i] * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Score: {(scores[i] * 100).toFixed(1)}%
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Consensus Summary */}
      {consensus && (
        <div className="p-6 bg-green-900/30 border border-green-700 rounded-xl">
          <p className="text-sm text-gray-400">Final Decision</p>
          <p className="text-lg font-semibold">{consensus}</p>

          <p className="text-sm mt-2 text-green-400">Winner: {winner}</p>

          <p className="text-sm text-green-400">Confidence: {agreement}%</p>
        </div>
      )}

      {/* IPFS */}
      {cid && (
        <div className="p-4 bg-blue-900/30 border border-blue-700 rounded-xl">
          <p className="text-sm text-gray-400">Stored on IPFS</p>
          <p className="text-xs break-all text-blue-300">{cid}</p>
        </div>
      )}

      {txHash && (
        <div className="p-4 bg-purple-900/30 border border-purple-700 rounded-xl">
          <p className="text-sm text-gray-400">GenLayer Tx</p>
          <p className="text-xs break-all text-purple-300">{txHash}</p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [outputs, setOutputs] = useState<string[]>([]);
  const [consensus, setConsensus] = useState("");

  const run = async () => {
    const res = await fetch("/api/run", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setOutputs(data.outputs);
    setConsensus(data.consensus);
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Playground</h1>

      <input
        className="border p-2 w-full mb-4 text-black"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />

      <button
        onClick={run}
        className="bg-indigo-600 px-4 py-2 mb-6"
      >
        Run
      </button>

      <div className="grid grid-cols-3 gap-4">
        {outputs.map((o, i) => (
          <div key={i} className="p-4 bg-gray-800 rounded">
            <p className="text-sm text-gray-400">Validator {i + 1}</p>
            <p>{o}</p>
          </div>
        ))}
      </div>

      {consensus && (
        <div className="mt-6 p-4 bg-green-800 rounded">
          Consensus: {consensus}
        </div>
      )}
    </div>
  );
}
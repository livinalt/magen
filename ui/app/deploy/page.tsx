"use client";

export default function Deploy() {
  const deploy = async () => {
    const res = await fetch("/api/deploy", { method: "POST" });
    const data = await res.json();
    alert("Deployed: " + data.contractId);
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Deploy</h1>

      <pre className="bg-black p-4 rounded">
{`if ai_model("fraud").predict(tx):
    block_transaction()`}
      </pre>

      <button
        onClick={deploy}
        className="mt-4 bg-blue-600 px-4 py-2"
      >
        Deploy
      </button>
    </div>
  );
}
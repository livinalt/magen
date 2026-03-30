import { models } from "@/lib/models";
import { Card } from "@/components/ui/card";

export default function Marketplace() {
  const isEmpty = models.length === 0;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Model Marketplace
      </h1>

      {isEmpty ? (
        <div className="border border-dashed border-gray-700 rounded-xl p-10 text-center bg-gray-900/40">
          <p className="text-gray-400 text-sm">
            No models available yet
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Deploy or register models to get started
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <Card
              key={m.id}
              className="p-5 bg-gray-900 border border-gray-800 rounded-2xl hover:border-indigo-500 transition"
            >
              <h2 className="font-semibold text-lg">
                {m.name}
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                {m.description}
              </p>

              <div className="mt-4 space-y-1 text-sm">
                <p>
                  <span className="text-gray-400">Consensus:</span>{" "}
                  {m.consensus}%
                </p>
                <p>
                  <span className="text-gray-400">Cost:</span> $
                  {m.cost}
                </p>
              </div>

              <a
                href="/playground"
                className="mt-5 block text-center py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
              >
                Try Model
              </a>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
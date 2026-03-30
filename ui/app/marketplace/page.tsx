import { models } from "@/lib/models";
import { Card } from "@/components/ui/card";

export default function Marketplace() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {models.map((m) => (
        <Card key={m.id} className="p-4 bg-gray-900">
          <h2 className="font-bold">{m.name}</h2>
          <p className="text-sm text-gray-400">{m.description}</p>

          <div className="mt-4 text-sm">
            <p>Consensus: {m.consensus}%</p>
            <p>Cost: ${m.cost}</p>
          </div>

          <a
            href="/playground"
            className="block mt-4 bg-indigo-600 text-center py-2 rounded"
          >
            Try Model
          </a>
        </Card>
      ))}
    </div>
  );
}
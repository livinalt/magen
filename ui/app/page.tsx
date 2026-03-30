"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Mon", consensus: 80 },
  { name: "Tue", consensus: 85 },
  { name: "Wed", consensus: 78 },
  { name: "Thu", consensus: 90 },
  { name: "Fri", consensus: 88 },
];

const usage = [
  { name: "Fraud AI", value: 120 },
  { name: "Summarizer", value: 90 },
  { name: "Risk AI", value: 70 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Models", value: "24" },
          { title: "Avg Consensus", value: "87%" },
          { title: "Executions", value: "1,240" },
          { title: "Validators", value: "56" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-md"
          >
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-2xl font-semibold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 border-0 bg-[#111827] shadow-lg">
          <Card className="p-6">
            <h3 className="mb-4">Consensus Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Line type="monotone" dataKey="consensus" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
          <Card className="p-6">
            <h3 className="mb-4">Model Usage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={usage}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
      
      {/* Feed */}
      <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-lg">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Live Activity
        </h3>

        <div className="space-y-4">
          {/* Item */}
          <div className="flex items-start gap-3 group hover:bg-gray-800/40 p-3 rounded-lg transition">
            <div className="mt-1 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <div>
              <p className="text-sm">Fraud detected</p>
              <p className="text-xs text-gray-400">Consensus: 3/3 • Approved</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group hover:bg-gray-800/40 p-3 rounded-lg transition">
            <div className="mt-1 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
            <div>
              <p className="text-sm">Appeal triggered</p>
              <p className="text-xs text-gray-400">
                Model override in progress
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 group hover:bg-gray-800/40 p-3 rounded-lg transition">
            <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <div>
              <p className="text-sm">Safe transaction</p>
              <p className="text-xs text-gray-400">2/3 consensus reached</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

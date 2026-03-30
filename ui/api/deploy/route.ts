import { NextResponse } from "next/server";
import { runModels } from "@/services/ai";
import { computeConsensus } from "@/services/consensus";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const outputs = await runModels(prompt);
  const consensus = computeConsensus(outputs);

  return NextResponse.json({
    outputs,
    consensus: `${consensus.agreement}% agreement`,
  });
}
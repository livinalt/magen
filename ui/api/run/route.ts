import { NextResponse } from "next/server";
import { runModels } from "@/services/ai";
import { computeConsensus } from "@/services/consensus";
import { uploadToIPFS } from "@/services/ipfs";
import { submitToGenLayer } from "@/services/genlayer";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const outputs = await runModels(prompt);

  const consensus = computeConsensus(outputs);

  const cid = await uploadToIPFS({
    prompt,
    outputs,
    consensus,
    timestamp: Date.now(),
  });

const tx = await submitToGenLayer({
  cid,
  result: consensus.result,
});

  // 4. Return everything to frontend
  return NextResponse.json({
    outputs,
    consensus: consensus.result,
    winner: consensus.winner,
    agreement: consensus.agreement,
    scores: consensus.scores,
    cid,
    txHash: tx.txHash,
    
  });

}
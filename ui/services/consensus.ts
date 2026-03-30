export function computeConsensus(outputs: { output: string }[]) {
  const counts: Record<string, number> = {};

  outputs.forEach((o) => {
    counts[o.output] = (counts[o.output] || 0) + 1;
  });

  let best = "";
  let max = 0;

  for (const key in counts) {
    if (counts[key] > max) {
      best = key;
      max = counts[key];
    }
  }

  return {
    result: best,
    agreement: Math.round((max / outputs.length) * 100),
  };
}
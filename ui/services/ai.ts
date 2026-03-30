const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const MODELS = [
  {
    name: "GPT (Strict)",
    model: "openai/gpt-4o-mini",
    system: "You are a strict financial fraud detection AI. Be conservative.",
  },
  {
    name: "Claude (Balanced)",
    model: "anthropic/claude-3-haiku",
    system: "You are a balanced risk analysis AI. Consider both sides.",
  },
  {
    name: "Mistral (Aggressive)",
    model: "mistralai/mistral-7b-instruct",
    system: "You are an aggressive fraud detection AI. Flag anything suspicious.",
  },
];

export async function runModels(prompt: string) {
  const responses = await Promise.all(
    MODELS.map(async ({ model, system, name }) => {
      try {
        const res = await fetch(OPENROUTER_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            temperature: 0.7,
            messages: [
              { role: "system", content: system },
              { role: "user", content: prompt },
            ],
          }),
        });

        const data = await res.json();

        return {
          model: name,
          output:
            data.choices?.[0]?.message?.content || "No response",
        };
      } catch (err) {
        return {
          model: name,
          output: "Error running model",
        };
      }
    })
  );

  return responses;
}
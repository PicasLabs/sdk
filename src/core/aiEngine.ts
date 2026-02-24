import OpenAI from "openai";
import { defaultPersonality } from "../personality/personalityConfig";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const generateAIResponse = async (
  userMessage: string,
  memory: string[]
) => {
  const systemPrompt = `
You are ${defaultPersonality.name}.
Tone: ${defaultPersonality.tone}.
Traits: ${defaultPersonality.traits.join(", ")}.

Previous memories:
${memory.join("\n")}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage }
    ]
  });

  return completion.choices[0].message.content;
};

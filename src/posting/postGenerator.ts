import { generateAIResponse } from "../core/aiEngine";

export const generatePost = async (topic: string) => {
  const prompt = `Create a short social media post about: ${topic}`;
  return await generateAIResponse(prompt, []);
};

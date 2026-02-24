import { Router } from "express";
import { generateAIResponse } from "../core/aiEngine";
import { saveMemory, getMemory } from "../memory/memoryStore";
import { generatePost } from "../posting/postGenerator";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.post("/chat", async (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ error: "Missing userId or message" });
  }

  const memory = getMemory(userId);
  const response = await generateAIResponse(message, memory);

  saveMemory(userId, message);
  saveMemory(userId, response || "");

  res.json({ response });
});

router.post("/post", async (req, res) => {
  const { topic } = req.body;

  const post = await generatePost(topic);
  res.json({ post });
});

router.post("/create-user", (req, res) => {
  const userId = uuidv4();
  res.json({ userId });
});

export default router;

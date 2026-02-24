import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Picas server running on port ${PORT}`);
});

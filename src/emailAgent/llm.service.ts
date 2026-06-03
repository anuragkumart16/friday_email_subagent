import { ChatGroq } from "@langchain/groq";
import { EmailSchema } from "./response.schema";

export const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

export const structuredLLM = llm.withStructuredOutput(EmailSchema)
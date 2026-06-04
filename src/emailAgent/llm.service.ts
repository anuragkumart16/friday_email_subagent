import { ChatGroq } from "@langchain/groq";
import { EmailSchema } from "./response.schema";
import { groqConfig } from "../config/envConfig"

export const llm = new ChatGroq({
  apiKey: groqConfig.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

export const structuredLLM = llm.withStructuredOutput(EmailSchema)
import { IEmailState } from "../state";
import { structuredLLM } from "../../llm.service";

export default async function generateEmail(state : IEmailState){
    const prompt = state.prompt
    if (!prompt) throw new Error("Prompt is needed!")

    const systemPrompt = `
        Recipient : ${state.recipient}
        Attachements : ${state.attachments ?? "None" }
        Subject : ${state.subject ?? "generate one"}
        Prompt : ${state.prompt}
    `
    
    const response = await structuredLLM.invoke(systemPrompt)
    return {
        ...state,
        subject : response.subject,
        body : response.body,
        status: "draft",
        approved : false
    }
}
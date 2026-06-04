import { IEmailState } from "../state";
import { structuredLLM } from "../../llm.service";

export default async function generateEmail(state : IEmailState){
    const prompt = state.prompt
    if (!prompt) throw new Error("Prompt is needed!")

    const systemPrompt = `
        You are a professional email writing assistant. Your task is to draft a professional email based on the user's request.

        Please adhere to the following guidelines:

        1. **Recipient**: ${state.recipient}
        2. **Subject**: ${state.subject ?? "Please generate an appropriate subject line"}
        3. **Prompt**: ${state.prompt}
        4. **Attachments**: ${state.attachments?.join(", ") ?? "None"}
        5. **Format**: Always generate the email body in HTML format.

        Requirements:
        - The email should be professional, concise, and clear.
        - Use appropriate salutations and closings.
        - Ensure the tone matches the context of the prompt.
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
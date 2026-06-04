import { Annotation } from "@langchain/langgraph"

export const EmailStateAnnotation = Annotation.Root({
    prompt: Annotation<string>(),
    recipient: Annotation<string>(),
    subject: Annotation<string | undefined>(),
    body: Annotation<string>(),
    attachments: Annotation<string[] | undefined>(),
    approved: Annotation<boolean | undefined>(),
    status: Annotation<string | undefined>(),
    extraInfo : Annotation<any | undefined>()
})

export type IEmailState = typeof EmailStateAnnotation.State
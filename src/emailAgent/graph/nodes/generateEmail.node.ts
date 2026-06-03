import { IEmailState } from "../state";

export default async function generateEmail(state : IEmailState){
    return {
        ...state,
        subject : "Test Subject",
        body : "Test Body",
        status: "draft",
        approved : false
    }
}
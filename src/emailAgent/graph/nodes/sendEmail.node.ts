import { IEmailState } from "../state";
import { sendMail } from "../../email.service";


export default async function sendEmail(state : IEmailState){
    if(state.approved){
        const response = await sendMail({
            to : state.recipient,
            subject : state.subject!,
            body : state.body
        })

        return ({
            ...state,
            status : "Sent",
            extraInfo : response
        })

    }
}
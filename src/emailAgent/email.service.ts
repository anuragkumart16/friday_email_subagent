// src/emailAgent/services/email.service.ts

import nodemailer from "nodemailer";
import { emailConfig } from "./../config/envConfig";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailConfig.EMAIL_USER,
        pass: emailConfig.EMAIL_PASSWORD,
    },
});

export async function sendMail({
    to,
    subject,
    body,
}: {
    to: string;
    subject: string;
    body: string;
}) {
    return transporter.sendMail({
        from: emailConfig.EMAIL_USER,
        to,
        subject,
        html: body,
    });
}
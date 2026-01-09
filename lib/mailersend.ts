import { MailerSend, Sender } from "mailersend";

export const msClient = new MailerSend({
    apiKey: process.env.MAILERSENDER_API_KEY
});

export const msSender = new Sender(
    process.env.MAILERSENDER_EMAIL_SENDER, 
    process.env.MAILERSENDER_SENDER_NAME
);
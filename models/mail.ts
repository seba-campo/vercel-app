import { msClient, msSender } from "../lib/mailersend";
import { EmailParams, Recipient } from "mailersend";

export class Mail {
    recipients: Recipient[] = []
    private subject: string = "Token de acceso"
    constructor(recipientMail?: string) {
        if (recipientMail) {
            this.SetNewRecipient(recipientMail)
        }
    }
    SetNewRecipient(recipientMail: string) {
        this.recipients.push(new Recipient(recipientMail));
    }
    async SendTokenByEmailAsync(token: number) {
        const mail = new EmailParams()
            .setFrom(msSender)
            .setTo(this.recipients)
            .setReplyTo(msSender)
            .setSubject(this.subject)
            .setHtml(`<h1>Token de acceso</h1><p>Tu token de acceso es: <strong>${token}</strong></p>`)
            .setText(`El token de acceso es: ${token}`)

        try {
            await msClient.email.send(mail)
            return true
        }
        catch (e) {
            console.error('Error al enviar email:', e)
            return false
        }
    }
}
import * as sgMail from "@sendgrid/mail";
import { msClient, msSender } from "../lib/mailersend";
import { MailerSend, EmailParams, Sender, Recipient} from "mailersend";

export class Mail {
    sgApp: sgMail.MailService
    recipients: Recipient[]
    private subject: string = "Token de acceso"
    constructor(recipientMail?: string){
        if(!recipientMail) return;
        this.SetNewRecipient(recipientMail)
    }
    SetNewRecipient(recipientMail: string){
        this.recipients.push(new Recipient(recipientMail));
    }
    async SendTokenByEmailAsync(token: number){
        const mail = new EmailParams()
            .setFrom(msSender)
            .setTo(this.recipients)
            .setReplyTo(msSender)
            .setSubject(this.subject)
            .setText(`El token de acceso es: ${token}`)

        try{
            await msClient.email.send(mail)   
        }
        catch(e){
            console.log(e)
        }
    }
}
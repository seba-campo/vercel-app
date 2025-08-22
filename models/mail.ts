import * as sgMail from "@sendgrid/mail"

export class Mail {
    sgApp: sgMail.MailService
    private from: string = process.env.SENDGRID_EMAIL_SENDER
    constructor(){
       sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
    async SendTokenByEmailAsync(token: number, sendTo: string){
        const msj = {
            subject: 'Token de acceso',
            text: 'Token de acceso',
            html: `<strong>TOKEN: ${token}</strong>`,
            to: sendTo,
            from: this.from
        }
        try{
            const sendMailAttempt = await sgMail.send(msj);
            return sendMailAttempt[0].statusCode == 200 ?  true : false;
        }
        catch(e){
            throw new Error(e);
        }

    }
}
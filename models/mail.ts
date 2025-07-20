import sgMail from "@sendgrid/mail"

export class Mail{
    from: string = "sebimotocross@gmail.com"
    to: string
    subject: string
    html: string
    constructor(to: string, subject: string, body: string){
        this.to = to;
        this.subject = subject;
        this.html = body;
    }
    async SendAsync(){
        if(!this.to && !this.html) return
        sgMail.setApiKey("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");
        sgMail.send({
            from: this.from,
            to: this.to,
            subject: this.subject,
            html: this.html 
        }).then(() => {
            console.log('Email sent')
            return true
        })
        .catch((error) => {
            console.error(error)
        })
    }
}
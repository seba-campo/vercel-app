import * as sgMail from "@sendgrid/mail"

export default function sendgrid(){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'campo.sebastian44@gmail.com', // Change to your recipient
        from: 'sebimotocross@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'Token de',
        html: '<strong>TOKEN</strong>',
        
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            return true
        })
        .catch((error) => {
            console.error(error)
        })
}



import * as sgMail from "@sendgrid/mail"

export default function sendgrid(){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'campo.sebastian44@gmail.com', // Change to your recipient
        from: 'sebimotocross@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'Token de acceso',
        html: '<strong>TOKEN</strong>',
        
        }
        sgMail
        .send(msg)
        .then((e) => {
            console.log('Email sent')
            e[0].statusCode            
        })
        .catch((error) => {
            console.error(error)
        })
}



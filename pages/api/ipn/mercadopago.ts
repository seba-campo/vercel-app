import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { getPaymentById, WebhokPayload} from "../../../lib/mercadopago";
import { messaging } from "firebase-admin";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        const body: WebhokPayload = await req.body;
        console.log("Webhook received", body);

        if (body.type === "payment") {
            const mpPayment = await getPaymentById(body.id as any);
            if (mpPayment.status === "approved") {
                console.log(`Payment ${mpPayment.id} approved`);
                const purchaseId = mpPayment.external_reference;
                res.send({message: "ok", purchase: purchaseId})
             }
        }
        else{
            res.status(404)
        }
    }
})
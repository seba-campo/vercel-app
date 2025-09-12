import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { getPaymentById, WebhokPayload} from "../../../lib/mercadopago";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        console.log("IPN received.. ",  req.query);

        // if (body.type === "payment") {
        //     const mpPayment = await getPaymentById(body.id as any);
        //     if (mpPayment.status === "approved") {
        //         console.log(`Payment ${mpPayment.id} approved`);
        //         const purchaseId = mpPayment.external_reference;
        //         res.send("OK")
        //      }
        // }
        // else{
        //     res.status(404)
        // }
        res.status(200)
    }
})
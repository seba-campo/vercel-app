import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import {fs} from "../../../lib/firebase";
import { generateOrderAndPayment } from "../../../controllers/orderController";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        const productId = parseInt(req.query.productId as any);
        const order = await generateOrderAndPayment(productId)
        res.json(order);
    }
})
import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import {fs} from "../../../lib/firebase";
import { generateOrderAndPaymentAsync } from "../../../controllers/orderController";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        const productId = req.query.productId as string;
        const userId = "TEST"
        const order = await generateOrderAndPaymentAsync(productId, userId)
        res.json(order);
    }
})
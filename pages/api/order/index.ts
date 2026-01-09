import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { generateOrderAndPaymentAsync, getOrdersByUserIdAsync } from "../../../controllers/orderController";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        const bodyReq = JSON.parse(req.body);
        const productId = bodyReq.productId as string;
        const userId = bodyReq.userId as string;
        const order = await generateOrderAndPaymentAsync(productId, userId)
        res.json(order);
    },
    async get(req: NextApiRequest, res: NextApiResponse) {
        const userId = req.query.userId as string;
        const order = await getOrdersByUserIdAsync(userId)
        res.json(order);
    }
})
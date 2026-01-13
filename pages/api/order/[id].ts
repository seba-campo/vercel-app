import { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router";
import { getOrderByIdAsync } from "../../../controllers/orderController";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        const orderId = req.query.id as string;
        const order = await getOrderByIdAsync(orderId)
        res.json(order);
    }
})
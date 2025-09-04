import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import authorization from "../../../middleware/authorization";
import { updateUserAddressAsync } from "../../../controllers/userController";
import { getOrdersByUserIdAsync } from "../../../controllers/orderController";

export default methods({
    // get: authorization(async(req: NextApiRequest, res: NextApiResponse) => {
    //     const email = (req as any).auth.email
    //     const userId = req.body.address;

    //     res.send(getOrdersByUserIdAsync(userId))     
    // }),
    async get(req: NextApiRequest, res: NextApiResponse){
        const userId = req.query.userId as string;

        res.send(await getOrdersByUserIdAsync(userId))     
    },
})
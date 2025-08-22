import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import authorization from "../../../middleware/authorization";
import { updateUserAddressAsync } from "../../../controllers/userController";

export default methods({
    patch: authorization(async(req: NextApiRequest, res: NextApiResponse) => {
        const email = (req as any).auth.email
        const newAddress = req.body.address;

        res.send(await updateUserAddressAsync(email, newAddress))     
    }),
})
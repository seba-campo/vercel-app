import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import authorization from "../../../middleware/authorization";
import { getUserDataAsync, updateUserAddressAsync } from "../../../controllers/userController";


export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        res.send("Ok desde /me POST");
    },
    get: authorization(async (req: NextApiRequest, res: NextApiResponse) => {
        const email = (req as any).auth.email;
        res.send(await getUserDataAsync(email))
    }),
    patch: authorization(async (req: NextApiRequest, res: NextApiResponse) => {
        const newAddress = (req as any).body.address;
        const email = (req as any).body.email;
        res.send(await updateUserAddressAsync(email, newAddress))
    })
})
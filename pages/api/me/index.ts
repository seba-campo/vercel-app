import { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router";
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
        const reqBody = JSON.parse(req.body);
        const newAddress = reqBody.address;
        const email = reqBody.email;
        res.send(await updateUserAddressAsync(email, newAddress))
    })
})
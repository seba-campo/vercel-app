import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/user";
import * as methods from "micro-method-router";
import authorization from "../../../middleware/authorization";
import { updateUserAddressAsync, getUserDataAsync } from "../../../controllers/userController";


export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        res.send("Ok desde /me POST");
    },
    get: authorization(async(req: NextApiRequest, res: NextApiResponse) => {
        const email = (req as any).auth.email;
        res.send(await getUserDataAsync(email))     
    })    
})
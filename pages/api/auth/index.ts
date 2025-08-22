import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { getAllRoomsAsync, createAuthAsync } from "../../../controllers/auth";
import sendgrid from "../../../lib/sendgrid";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        const email = req.body.email;
        res.send(await createAuthAsync(email));
    }
})
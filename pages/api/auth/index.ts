import { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router";
import { createAuthAsync } from "../../../controllers/authController";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        const email = req.body.email;
        res.send(await createAuthAsync(email));
    }
})
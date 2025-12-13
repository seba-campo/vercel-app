import { NextApiRequest, NextApiResponse } from "next"
import { auntenticateAsync } from "../../../controllers/authController";
import * as methods from "micro-method-router";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        const email = req.body.email;
        const token = req.body.token;
        await auntenticateAsync(email, token)
            ? res.send(await auntenticateAsync(email, token))
            : res.status(401).send("Unauthorized");
    }
})
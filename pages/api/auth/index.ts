import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { FindOrCreateAsyncController } from "../../../controllers/auth";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        const email = req.body.email;
        console.log(email)
        res.send(FindOrCreateAsyncController(email));
    }
})
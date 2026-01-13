import { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        res.send("Ok desde /api GET");
    }
})

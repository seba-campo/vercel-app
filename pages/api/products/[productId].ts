import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse){
        const query = req.query.productId;
        res.send("Ok desde /products/"+query);
    }
})
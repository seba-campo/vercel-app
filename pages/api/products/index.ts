import next, { NextApiRequest, NextApiResponse } from "next"
// import {client} from "../../../lib/firebase";
import * as methods from "micro-method-router";
import { getProductByQuery } from "../../../controllers/productController";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse){
        const limit = parseInt(req.query.limit as string);
        const offset = parseInt(req.query.offset as string);
        const query = req.query.q as string;
        const results = await getProductByQuery(query, limit, offset);

        res.send({
        "results": results.results,
        "pagination": {
            "offset": offset,
            "limit": limit,
            "total": results.total
        }});
    }
})
import next, { NextApiRequest, NextApiResponse } from "next"
// import {client} from "../../../lib/firebase";
import * as methods from "micro-method-router";
import { getProductByQuery } from "../../../controllers/productController";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse){
        const limit = parseInt(req.query.limit as string);
        const offset = parseInt(req.query.offset as string);
        const query = req.query.q as string;
        //Hacer la busqueda en algolia
        const results = await getProductByQuery(query, limit, offset)


        const resultsPaged = results[0].hits
            .slice(offset, offset + limit);
        
        res.send({
        "results": results[0].hits,
        "pagination": {
            "offset": offset,
            "limit": limit,
            "total": "totals.results[0].nbHits"
        }});
    }
})
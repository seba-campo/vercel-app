import next, { NextApiRequest, NextApiResponse } from "next"
// import {client} from "../../../lib/firebase";
import methods from "micro-method-router";
import { getFeaturedProductsAsync } from "../../../controllers/productController";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
        const results = await getFeaturedProductsAsync();

        res.send({
            "results": results
        });
    }
})
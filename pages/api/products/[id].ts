import next, { NextApiRequest, NextApiResponse } from "next";
// import {client} from "../../../lib/firebase";
import * as methods from "micro-method-router";
import { getProductByIdAsync } from "../../../controllers/productController";


export default methods({
    get: async (req: NextApiRequest, res: NextApiResponse) => {
        const productId = req.query.id as string;
        try {
            const product = await getProductByIdAsync(productId);
            res.json(product)
        }
        catch (e) {
            res.status(404).json(e);
        }
    }
})
import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { syncData } from "../../../lib/algolia";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        var queryParams = req.query;
        const sync = await syncData();
        res.send(sync)        
    }
})
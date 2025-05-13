import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse){
        var queryParams = req.query;
        res.send({
            response: "Ok desde /search GET",
            query: {queryParams}
        });
    }
})
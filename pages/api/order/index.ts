import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        var queryParams = req.query;
        res.send({
            response: "Ok desde /order POST",
            query: {queryParams}
        });
    }
})
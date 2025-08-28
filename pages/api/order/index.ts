import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import fs from "../../../lib/firebase";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        var queryParams = req.query;
        res.send({
            response: "test",
            query: {queryParams}
        });
    }
})
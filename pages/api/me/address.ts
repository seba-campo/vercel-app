import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";

export default methods({
    async patch(req: NextApiRequest, res: NextApiResponse){
        res.send("Metodo PATCH del /me/address");
    }
})
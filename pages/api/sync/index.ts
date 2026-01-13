import { NextApiRequest, NextApiResponse } from "next"
import methods from "micro-method-router";
import { syncData } from "../../../lib/algolia";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse) {
        console.log("Hola")
        const sync = await syncData();
        res.send(sync)
    }
})
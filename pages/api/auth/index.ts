import { NextApiRequest, NextApiResponse } from "next"
import * as methods from "micro-method-router";
import { getAllRoomsAsync, createAuthAsync } from "../../../controllers/auth";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        // const nombre = req.body.nombre;
        const email = req.body.email;
        res.send(await createAuthAsync(email));
    }
})
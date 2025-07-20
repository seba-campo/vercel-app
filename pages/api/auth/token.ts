import { NextApiRequest, NextApiResponse } from "next"
import { Auth } from "../../../models/auth";
import * as methods from "micro-method-router";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        const email = req.body.email;
        const token = req.body.token;
        const authInstance = new Auth(email, token);
        try{
            const auth = await authInstance.AuthenticateUser()
            res.send(auth);
        }
        catch(e){
            res.status(401).json({"message":"Token expirado"});
        }
    }
})
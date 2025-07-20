import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/user";
import * as methods from "micro-method-router";
import { verify, decode, JwtPayload } from "jsonwebtoken";

export default methods({
    async post(req: NextApiRequest, res: NextApiResponse){
        res.send("Ok desde /me POST");
    },
    async patch(req: NextApiRequest, res: NextApiResponse){
        res.send("Ok desde /me PATCH");
    },
    async get(req: NextApiRequest, res: NextApiResponse){
        const jwt = req.headers.authorization;
        var payload;
        try{
           payload =  verify(jwt,'secret');
        }
        catch(e){
            res.status(401).json({"message":"Token expirado"});
            throw new Error("Error de autenticación");
        }
        finally{
            const email = payload.data.email
            const userInstance = new User(email);
            const userData = await userInstance.GetUserByEmailAsync();
            res.send(userData)
        }
    }
})
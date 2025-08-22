import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";


export default function authorization(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const payload = verify(token, process.env.JWT_SECRET_KEY);
      (req as any).auth = payload;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Token inválido" });
    }
  };
}
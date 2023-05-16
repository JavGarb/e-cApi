import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../sequelize/models/user";
import { config } from "../config/config";

interface AuthRequest extends Request {
  user?: User;
}

async function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token: string | string[] = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Token is missing" });
  }

  try {
    const decoded: any = jwt.verify(token, config.jwtSecret);
    const userId: string = decoded.userId;

    const user: User | null = await User.findByPk(userId);

    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export default authMiddleware;

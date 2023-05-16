import { Request, Response } from "express";
import {authController} from "../controllers/authController";
import { User } from "../sequelize/models/user";

export default async function loginRoute(
  req: Request,
  res: Response
): Promise<void> {
  try {
      const userlog = req.body;
      const userdb = await User.findOne({
        where: { email: userlog.email },
      });
    const token = await authController(userdb, userlog.password);
    if (token) res.status(200).json(token);
    else res.status(400).json({ message: "invalid user or password" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

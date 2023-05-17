import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../sequelize/models/user";

export default async function createUserRoute(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { firstName, lastName, email, password, shippingAddress } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      shippingAddress,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

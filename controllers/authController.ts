import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export async function authController(user, pass) {
  const isMatch = await bcrypt.compare(pass,user.password);

  if (!isMatch) {
    // Si las contraseñas no coinciden, devuelve un error de autenticación
    throw Error("Invalid email or password");
  }

  // Genera un token JWT con el ID del usuario
  const jwtSecret = config.jwtSecret; 
  const token = jwt.sign({ userId: user.id }, jwtSecret);

  // Devuelve el token en la respuesta
    return token;
}

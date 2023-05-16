import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./sequelize";
import loginRoute from "./routes/login";
import createUserRoute from "./routes/createUser";
import DepartamentRoutes from "./routes/departamentRoutes";
import authMiddleware from "./middlewares/authmiddleware";
import { Order } from "./sequelize/models/order";
import { Product } from "./sequelize/models/product";
import { User } from "./sequelize/models/user";
import { Rating } from "./sequelize/models/rating";
import { Voucher } from "./sequelize/models/voucher"

require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
//las rutas de creatr user y login
app.post("/create", createUserRoute);
app.post("/login", loginRoute);
//las demas rutas protegidas por el token
app.use("/products", authMiddleware, DepartamentRoutes);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log(`Database synced successfully`);
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Unable to sync database: ${error}`);
  });

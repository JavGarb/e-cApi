import { Model, DataTypes } from "sequelize";
import sequelize from "../";

export class Order extends Model {}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "Order",
  }
);

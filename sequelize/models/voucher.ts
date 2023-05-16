import { Model, DataTypes } from "sequelize";
import sequelize from "../";

export class Voucher extends Model {}

Voucher.init(
  {
    orderId: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mount: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "Voucher",
  }
);

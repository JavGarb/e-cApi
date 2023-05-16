import { Model, DataTypes } from "sequelize";
import sequelize from "../";

export class Product extends Model {}

Product.init(
  {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    stock: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "Product",
    timestamps: false,
  }
);

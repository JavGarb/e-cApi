import { Model, DataTypes } from "sequelize";
import sequelize from "../";

export class Rating extends Model {}

Rating.init(
  {
    rating: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resena: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "Rating",
    timestamps: false,
  }
);

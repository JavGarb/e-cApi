import { Model, DataTypes } from 'sequelize';
import sequelize  from '../';

export class User extends Model {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  shippingAddress: string;
  createAt: Date;
  active: boolean;
  rol: string;
}

User.init({
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shippingAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createAt: {
    type: DataTypes.DATEONLY,
    defaultValue: Date.now(),
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  rol: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
}, {
  sequelize,
  tableName: 'User',
  timestamps:false
});

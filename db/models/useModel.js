const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize');


const User = sequelize.define ('User',{
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createsAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: sequelize.NOW,
  },
  active: {
    type: DataTypes.BOOL,
    defaultValue:true,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
});

module.exports = User;


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meals extends Model {}

Meals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'Meals',
  },
);

module.exports = Meals;

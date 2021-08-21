const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class MealPlan extends Model {}

MealPlan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        meal_date:{
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        meal_type:{
            type:DataTypes.STRING,
            allowNull: false
        },
        meal_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        meal_qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'mealplan'
    }
);

module.exports = MealPlan
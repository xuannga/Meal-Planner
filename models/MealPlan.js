const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class MealPlan extends Model {}

MealPlan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        meal_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        meal_qty: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        day: {
            type: DataTypes.STRING,
            allowNull: true
        },

        time: {
            type: DataTypes.STRING,
            allowNull: true
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
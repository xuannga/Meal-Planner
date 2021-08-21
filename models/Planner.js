const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Planner extends Model {}

Planner.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        Week_Number:{
            type: DataTypes.STRING,
            allowNull: false
        },

        DayofWeek: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Breakfast: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Breakfast_Qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Lunch: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Lunch_Qty: {
        type: DataTypes.INTEGER,
        allowNull: false
        },

        Dinner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        Dinner_Qty: {
        type: DataTypes.INTEGER,
        allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        sequelize,
        modelName: 'Cupboard'
    }
);

module.exports = Cupboard
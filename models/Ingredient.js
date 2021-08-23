const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {};

Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        meal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Meals',
                key: 'id'
            }
        },
        
        cupboard_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Cupboard',
                key: 'id'
            }
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        sequelize,
        modelName: 'Ingredient',
        timestamps: false
    }
);

module.exports = Ingredient;
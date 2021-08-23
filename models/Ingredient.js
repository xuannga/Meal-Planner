const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {};

Ingredient.init(
    {

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
        modelName: 'Ingredient'
    }
);

module.exports = Ingredient;
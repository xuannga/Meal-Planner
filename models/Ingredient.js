const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {};

Ingredient.init(
    {

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        cupboard_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
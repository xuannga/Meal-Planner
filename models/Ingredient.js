const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {};

Ingredient.init(
    {

        // meal_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'Meals',
        //         key: 'id',
        //         unique: false
        //       }
        // },
        
        // cupboard_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'Cupboard',
        //         key: 'id',
        //         unique: false
        //       }
        // },

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
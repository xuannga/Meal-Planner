const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Cupboard extends Model {}

Cupboard.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        UOM: {
            type: DataTypes. STRING
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isRefrig:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName: 'Cupboard'
    }
);

module.exports = Cupboard
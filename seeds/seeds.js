require('dotenv').config();
const sequelize = require('../config/connection');
const { Cupboard, Ingredient, Meals, User } = require('../models');

const cupboardData = require('./cupboardData.json');
const ingredientsData = require('./ingredientsData.json');
const mealsData = require('./mealsData.json');
const userData = require('./userData.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Cupboard.bulkCreate(cupboardData);

    await Ingredient.bulkCreate(ingredientsData);

    await Meals.bulkCreate(mealsData);


    process.exit(0);
};

seedDatabase();
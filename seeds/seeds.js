require('dotenv').config();
const sequelize = require('../config/connection');
const { Cupboard, Ingredient, Meals, User, MealPlan } = require('../models');

const cupboardData = require('./cupboardData.json');
const ingredientsData = require('./ingredientsData.json');
const mealsData = require('./mealsData.json');
const userData = require('./userData.json');
const mealPlanData = require('./mealPlanData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Cupboard.bulkCreate(cupboardData);

    await Ingredient.bulkCreate(ingredientsData);

    await Meals.bulkCreate(mealsData);

    await MealPlan.bulkCreate(mealPlanData);


    process.exit(0);
};

seedDatabase();
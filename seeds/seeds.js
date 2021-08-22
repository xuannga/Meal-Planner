require('dotenv').config();
const sequelize = require('../config/connection');
const { Cupboard, Ingredient, Meals, User, MealPlan } = require('../models');

const cupboardData = require('./cupboardData.json');
const ingredientsData = require('./ingredientsData.json');
const mealsData = require('./mealsData.json');
const userData = require('./userData.json');
const mealPlanData = require('./mealPlanData.json');

const seedDatabase = async () => {
    // Code below can be uncommented to remove fk constraints when seeding.
    // await sequelize.queryInterface.removeConstraint('ingredients', 'ingredients_ibfk_2');

    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Cupboard.bulkCreate(cupboardData);

    await Ingredient.bulkCreate(ingredientsData);

    await Meals.bulkCreate(mealsData);

    for (let id = 1; id <= 21; id++) {
        await MealPlan.create({id})
    }


    process.exit(0);
};

seedDatabase();
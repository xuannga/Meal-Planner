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

    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        await Cupboard.bulkCreate(cupboardData);

        await Meals.bulkCreate(mealsData);


        await Ingredient.bulkCreate(ingredientsData);

        for (let id = 1; id <= 21; id++) {
            await MealPlan.create({id})
        }
    } catch (err) {
        console.error(err)
    }

    process.exit(0);
};

seedDatabase();
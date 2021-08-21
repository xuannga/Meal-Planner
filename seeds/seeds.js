require('dotenv').config();
const sequelize = require('../config/connection');
const { Cupboard, Ingredient, Meals, User, MealPlan } = require('../models');

const cupboardData = require('./cupboardData.json');
const ingredientsData = require('./ingredientsData.json');
const mealsData = require('./mealsData.json');
const userData = require('./userData.json');
const mealPlanData = require('./mealPlanData.json');

const seedDatabase = async () => {
try{
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Cupboard.bulkCreate(cupboardData);
    await Meals.bulkCreate(mealsData);
    await Ingredient.bulkCreate(ingredientsData);

    await MealPlan.bulkCreate(mealPlanData);}
    catch(err){
        console.error(err)
    }


    process.exit(0);
};

seedDatabase();
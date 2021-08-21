const User = require('./User');
const Ingredient = require('./Ingredient');
const Cupboard = require('./Cupboard');
const Meals = require('./Meals');
const MealPlan = require('./MealPlan')

User.hasMany(Cupboard, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Cupboard.belongsTo(User, {
    foreignKey: 'user_id'
});

Meals.belongsTo(User,{
    foreignKey: 'user_id'
});
User.hasMany(Meals, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Meals.hasMany(MealPlan,{
    foreignKey:'meal_id'
});

MealPlan.belongsTo(Meals,{
    foreignKey:'meal_id'
});

Meals.belongsToMany(Cupboard, {
    through:{
        model: Ingredient,
        unique: false,
    } ,
    as:'meal_cupboard'
});

Cupboard.belongsToMany(Meals,{
    through:{
        model: Ingredient,
        unique: false,
    },
    as: 'cupboard_meal'
});




module.exports={User,Ingredient,Cupboard,Meals,MealPlan}
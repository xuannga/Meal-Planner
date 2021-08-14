const User = require('./User');
const Ingredient = require('./Ingredient');
const Cupboard = require('./Cupboard');
const Meals = require('./Meals');

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

module.exports={User,Ingredient,Cupboard,Meals}
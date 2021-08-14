const User = require('./User');
const Ingredient = require('./Ingredient');
const Cupboard = require('./Cupboard');

User.hasMany(Cupboard, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Cupboard.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports={User,Ingredient,Cupboard}
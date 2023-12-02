// import models
const User = require('./User');
const Category = require('./Category');
const Child = require('./Child');
const Action = require('./Action');
const Assignment = require('./Assignment');

// User hasMany Child
User.hasMany(Child, {
    foreignKey: 'user_id'
});

// Child belongsTo User
Child.belongsTo(User, {
    foreignKey: 'user_id'
});

// Child hasMany Assignment
Child.hasMany(Assignment, {
    foreignKey: 'child_id'
});

// Assignment belongsTo Child
Assignment.belongsTo(Child, {
    foreignKey: 'child_id'
});

// Child hasMany Action through Assignment
Child.belongsToMany(Action, {
    through: Assignment,
    foreignKey: 'child_id' 
});

// Action hasMany Child through Assignment
Action.belongsToMany(Child, {
    through: Assignment,
    foreignKey: 'action_id' 
});

// Category hasMany Action
Category.hasMany(Action, {
    foreignKey: 'category_id'
});

// Action belongsTo Category
Action.belongsTo(Category, {
    foreignKey: 'category_id'
});

// export models

module.exports = {
    User,
    Child,
    Action,
    Assignment,
    Category,
};
//model to create the many to many relationship between  child and actions 
// child can have many actions and actions can belong to many children.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assignment extends Model {}

Assignment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      action_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'action',
            key: 'id'
        },
      },
      child_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'child',
            key: 'id'
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'assignment',
    }
  );
  
  module.exports = Assignment;
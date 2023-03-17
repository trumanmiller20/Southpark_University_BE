'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //try 'hasMany' if time
      Student.belongsToMany(models.Course,  {
         through: models.Grade,
         foreignKey: 'studentId',
         as: 'grade_list',
        });
      Student.hasMany(models.Grade);

    }
  }
  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [
      {
        name: 'Math',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'English',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Science',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'History',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Art',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Physical Education',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Politics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gender Studies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Computer Science',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};


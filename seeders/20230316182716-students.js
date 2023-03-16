'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [
      {
        name: 'Mark Wahlberg',
        email: 'NoPain.NoGain@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eric Cartman',
        email: 'eric.cartman@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kenny McCormick',
        email: 'Kenny.McCormick@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kyle Broflovski',
        email: 'Kyle.Broflovski@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stan Marsh',
        email: 'Kyle.Broflovski@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};

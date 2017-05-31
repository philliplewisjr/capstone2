
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {firstname: 'Aemero', lastname: 'Lewis', grade: '1', parent: 'Erica Lewis', phone: '615-567-8911', gender: 'Male'},
        {firstname: 'Westly', lastname: 'Isbell', grade: 'NSS', parent: 'JavaScript', phone: '010-010-0101', gender: 'Robot'},
        {firstname: 'Priya', lastname: 'Sivasubramanian', grade: 'NSS', parent: 'Knex', phone: '010-010-0101', gender: 'female'}
      ]);
    });
};

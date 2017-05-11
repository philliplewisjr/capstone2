
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {first_name: 'Aemero', last_name: 'Lewis', grade: '1', parent: 'Erica Lewis', phone: '615-567-8911', gender: 'Male'},
        {first_name: 'Westly', last_name: 'Isbell', grade: 'NSS', parent: 'JavaScript', phone: '010-010-0101', gender: 'Robot'},
        {first_name: 'Priya', last_name: 'Sivasubramanian', grade: 'NSS', parent: 'Knex', phone: '010-010-0101', gender: 'female'}
      ]);
    });
};

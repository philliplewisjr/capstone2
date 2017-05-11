
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('family').del()
    .then(function () {
      // Inserts seed entries
      return knex('family').insert([
        {parent_id: 1, student_id: 1},
        {parent_id: 2, student_id: 2}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('progress').del()
    .then(function () {
      // Inserts seed entries
      return knex('progress').insert([
        {academic_id: 1, student_id: 1},
        {academic_id: 2, student_id: 2}  
      ]);
    });
};

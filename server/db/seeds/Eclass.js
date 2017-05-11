
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('class').del()
    .then(function () {
      // Inserts seed entries
      return knex('class').insert([
        {student_id: 2, teacher_id: 2, academic_id: 1},
        {student_id: 1, teacher_id: 1, academic_id: 2}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {teacher_id: 1, student_id: 2, message: "Almost done keep it up"},
        {teacher_id: 2, student_id: 1, message: "Be ready for demo day"}
      ]);
    });
};

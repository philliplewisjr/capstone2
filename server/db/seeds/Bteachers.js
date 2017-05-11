
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {first_name: "Scott", last_name: "Humphries", class_room: "Cohort17", email: "scott@awal.com"},
        {first_name: "Catlin", last_name: "Stein", class_room: "Cohort17", email: "sonic@tea.com"}
      ]);
    });
};

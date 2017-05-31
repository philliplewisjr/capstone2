
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {firstname: "Scott", lastname: "Humphries", classroom: "Cohort17", email: "scott@awal.com"},
        {firstname: "Catlin", lastname: "Stein", classroom: "Cohort17", email: "sonic@tea.com"}
      ]);
    });
};

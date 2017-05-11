
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('academics').del()
    .then(function () {
      // Inserts seed entries
      return knex('academics').insert([
        {subject: "JavaScript", status: "working"},
        {subject: "NodeJs", status: "working"}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        {first_name: "Lucas", last_name: "McLaughlin", email: "machine@learning.com", child: "Westly Isbell"},
        {first_name: "Sorrel", last_name: "Brigman", email: "woman@power.com", child: "Priya"}
      ]);
    });
};

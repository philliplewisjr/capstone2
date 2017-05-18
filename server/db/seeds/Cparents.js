
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        {firstname: "Lucas", lastname: "McLaughlin", email: "machine@learning.com", child: "Westly Isbell"},
        {firstname: "Sorrel", lastname: "Brigman", email: "woman@power.com", child: "Priya"}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        {email: "machine@learning.com", password: "123", firstname: "Lucas", lastname: "McLaughlin",  child: "Westly Isbell", phone_number: "111"},
        {email: "g@power.com", password: "1", firstname: "Sorrel", lastname: "Brigman",  child: "Priya", phone_number: "111"}
      ]);
    });
};

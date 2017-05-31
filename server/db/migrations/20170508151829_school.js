
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", (table)=>{
    table.increments().primary()
    table.string("firstname")
    table.string("lastname")
    table.string("picture")
    table.string("grade")
    table.string("parent")
    table.string("phone")
    table.string("gender")
  })
  .createTable("teachers", (table)=>{
    table.increments().primary()
    table.string("firstname")
    table.string("lastname")
    table.string("picture")
    table.string("classroom")
    table.string("email")
  })
  .createTable("parents", (table)=> {
    table.increments().primary()
    table.string("email").notNullable().unique()
    table.string("password")
    table.string("firstname")
    table.string("lastname")
    table.string("child")
    table.string("phone_number")
    table.string("photo")
  })
  .createTable("academics", (table)=>{
    table.increments().primary()
    table.string("subject")
    table.string("picture")
    table.string("status")
  })
  .createTable("messages", (table)=>{
    table.increments().primary()
    table.integer("teacher_id").unsigned().references("teachers.id")
    table.integer("student_id").unsigned().references("students.id")
    table.string("message")
    table.unique(["teacher_id", "student_id"])
  })
  .createTable("class", (table)=>{
    table.increments()
    table.integer("student_id").unsigned().references("students.id")
    table.integer("teacher_id").unsigned().references("teachers.id")
    table.integer("academic_id").unsigned().references("academics.id")
    table.unique(["student_id", "teacher_id", "academic_id"])
  })
  .createTable("family", (table)=>{
    table.increments().primary()
    table.integer("parent_id").unsigned().references("parents.id")
    table.integer("student_id").unsigned().references("students.id")
    table.unique(["parent_id", "student_id"])
  })
};



exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("messages")
  .dropTable("class")
  .dropTable("family")
  // .dropTable("progress")
  .dropTable("students")
  .dropTable("teachers")
  .dropTable("parents")
  .dropTable("academics")
};

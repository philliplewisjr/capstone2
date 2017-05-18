
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
    table.string("firstname")
    table.string("lastname")
    table.string("email")
    table.string("child")
    table.string("phone_number")
  })
  .createTable("academics", (table)=>{
    table.increments().primary()
    table.string("subject")
    table.string("picture")
    table.string("status")
  })
  .createTable("messages", (table)=>{
    table.increments().primary()
    table.integer("teacher_id").unique().references("teachers.id")
    table.integer("student_id").unique().references("students.id")
    table.string("message")
  })
  .createTable("class", (table)=>{
    table.increments()
    table.integer("student_id").unique().references("students.id")
    table.integer("teacher_id").unique().references("teachers.id")
    table.integer("academic_id").unique().references("academics.id")
  })
  .createTable("family", (table)=>{
    table.increments().primary()
    table.integer("parent_id").unique().references("parents.id")
    table.integer("student_id").unique().references("students.id")
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

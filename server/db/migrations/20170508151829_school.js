
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", (table)=>{
    table.increments('student_id').primary()
    table.string("first_name")
    table.string("last_name")
    table.string("grade")
    table.string("parent")
    table.string("phone")
    table.string("gender")
  })
  .createTable("teachers", (table)=>{
    table.increments("teacher_id").primary()
    table.string("first_name")
    table.string("last_name")
    table.string("class_room")
    table.string("email")
  })
  .createTable("parents", (table)=> {
    table.increments("parent_id").primary()
    table.string("first_name")
    table.string("last_name")
    table.string("email")
    table.string("child")
  })
  .createTable("academics", (table)=>{
    table.increments("academic_id").primary()
    table.string("subject")
    table.string("status")
  })
  .createTable("messages", (table)=>{
    table.increments("message_id").primary()
    table.integer("teacher_id").references("teachers.teacher_id")
    table.integer("student_id").references("students.student_id")
    table.string("message")
  })
  .createTable("class", (table)=>{
    table.increments()
    table.integer("student_id").references("students.student_id")
    table.integer("teacher_id").references("teachers.teacher_id")
    table.integer("academic_id").references("academics.academic_id")
  })
  .createTable("family", (table)=>{
    table.increments("family_id").primary()
    table.integer("parent_id").references("parents.parent_id")
    table.integer("student_id").references("students.student_id")
  })
  .createTable("progress", (table)=>{
    table.increments("progress_id").primary()
    table.integer("academic_id").references("academics.academic_id")
    table.integer("student_id").references("students.student_id")
  })
};



exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("messages")
  .dropTable("class")
  .dropTable("family")
  .dropTable("progress")
  .dropTable("students")
  .dropTable("teachers")
  .dropTable("parents")
  .dropTable("academics")
};

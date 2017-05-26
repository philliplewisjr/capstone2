const { bookshelf } = require('../db/database')

require('./class1')
require('./teachers1')

const Student = bookshelf.Model.extend({
  tableName: 'students',
  class: function () {return this.hasMany('Class')},
  teachers: function () {return this.hasMany('Teacher').through('Class')}
},{
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then((rows)=>{
      return rows;
    })
    .catch((error)=>{
      return error
    })
  },
  getById: function (id) {
    return this.where({id: id})
    .fetch()
    .then((student)=> {
      return student;
    })
    .catch((error)=>{
      return error;
    })
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  },
  add: function (student) {
    return this.forge(student)
    .save({}, {require: true})
    .then(res => res)
  },
  update: function(body, id) {
    return this.where({id: id})
    .save(body, {patch: true})
    .then(() => {
      return {"message": "Student Updated"}
    })
    .catch((err) => {
      return err;
    })
  }
})

module.exports = bookshelf.model('Student', Student)

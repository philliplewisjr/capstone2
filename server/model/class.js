'use strict';

const bookshelf = require('./db/database')
require('./teachers')
require('./students')
require('./academics')

const Class = bookshelf.Model.extend({
  table: 'class',
  teachers: function () { return this.hasMany('teachers') }
  students: function () { return this.hasMany('students') }
  academics: function () { return this.hasMany('academics') }
}, {
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then((rows)=>{
      return rows;
    )}
    .catch((error)=>{
      return error;
    })
  },
  getById: function (id) {
    return this.where({class_id: id})
    .fetch()
    .then((class)=>{
      return class;
    })
    .catch((error)=>{
      return error;
    })
  },
  add: function (class) {
    return this.forge(class)
    .save({}, {require: true})
  },
  delete: function (id) {
    return this.where({class_id: id})
    .destroy({require: true})
  }
})
module.exports = bookshelf.model('Class', Class)

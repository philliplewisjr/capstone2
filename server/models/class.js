'use strict';

const { bookshelf } = require('../db/database')
require('./teachers');
require('./students');
require('./academics')

const Class = bookshelf.Model.extend({
  tableName: 'class',
  teachers: function () { return this.hasMany('teachers') },
  students: function () { return this.hasMany('students') },
  academics: function () { return this.hasMany('academics') }
}, {
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then((rows)=>{
      return rows;
    })
    .catch((error)=>{
      return error;
    })
  },
  getById: function (id) {
    return this.where({id: id})
    .fetch()
    .then((class1)=>{
      return class1;
    })
    .catch((error)=>{
      return error;
    })
  },
  add: function (class2) {
    return this.forge(class2)
    .save({}, {require: true})
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  }
})
module.exports = bookshelf.model('Class', Class)

'use strict';

const { bookshelf } = require('../db/database')

require('./academics1')

const Classes = bookshelf.Model.extend({
  tableName: 'class',
  academic: function () {return this.belongsToMany('Academic');},
  teachers: function () {return this.belongsToMany('Teacher')}
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
  },
  update: function(body, id) {
    return this.where({id: id})
    .save(body, {patch: true})
    .then(() => {
      return {"message": "Class Updated"}
    })
  }
})
module.exports = bookshelf.model('Classes', Classes)

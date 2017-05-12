const { bookshelf } = require('../db/database');
require('./class')

const Academics = bookshelf.Model.extend({
  tableName: 'academics',
  class: function () { this.belongsToMany('Class')}
  // students: function () { return this.belongsToMany('students').through('class')}
  // teachers: function () { return this.belongsToMany('teachers').through('class')}
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
  getOne: function (id) {
    return this.where({academic_id: id})
    .fetchAll()
    .then((academic)=>{
      return academic;
    })
    .catch((error)=>{
      return error;
    })
  },
  delete: function (id) {
    return this.where({academic_id: id})
    .destroy({require: true})
  },
  add: function (academic) {
    return this.forge(academic)
    .save({}, {require: true})
  }
})

module.exports = bookshelf.model('Academics', Academics)

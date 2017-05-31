const { bookshelf } = require('../db/database');
require('./students');
require('./teachers');
require('./class');



const Academics = bookshelf.Model.extend({
  tableName: 'academics',
  class: function () { this.belongsToMany('Class')},
  students: function () { return this.belongsToMany('Students').through('Class')},
  teachers: function () { return this.belongsToMany('Teachers').through('Class')}
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
    return this.where({id: id})
    .fetchAll()
    .then((academic)=>{
      return academic;
    })
    .catch((error)=>{
      return error;
    })
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  },
  add: function (academic) {
    return this.forge(academic)
    .save({}, {require: true})
  }
})

module.exports = bookshelf.model('Academics', Academics)

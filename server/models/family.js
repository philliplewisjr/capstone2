const { bookshelf } = require('../db/database')
require('./students')
require('./parents')

const Family = bookshelf.Model.extend({
  tableName: 'family',
  student: function () {return this.hasMany('Students')},
  parent: function () {return this.hasMany('Parents')}
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
    .then((family)=>{
      return family;
    })
    .catch((error)=>{
      return family;
    })
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  },
  dependents: [ 'Parents', 'Students' ]

})
module.exports = bookshelf.model('Family', Family)

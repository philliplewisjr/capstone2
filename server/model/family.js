const bookshelf = require('../db/database')
require('./student')
require('./parent')

const Family = bookshelf.Model.extend({
  tableName: family,
  student: function () {return this.hasMany('Students')},
  parent: function () {return this.hasMany('Parents')}
}, {
  getAllfamilies: function () {
    return this.forge()
    .fetchAll()
    .then((rows)=>{
      return rows;
    })
    .catch((error)=>{
      return error;
    })
  },
  getFamily: function (id) {
    return this.where({family_id: id})
    .fetch()
    .then((family)=>{
      return family:
    })
    .catch((error)=>{
      return family;
    })
  }
})
module.exports = bookshelf.model('Family', Family)

const bookshelf = require('../db/database')
require('./teachers')
require('./students')

const Messages = bookshelf.Model.extend({
  tableName: 'messages',
  teacher: function () {return this.hasMany('Teachers')},
  student: function () {return this.hasMany('Students')}
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
    return this.where({message_id: id})
    .fetch()
    .then((message)=>{
      return message;
    })
    .catch((error)=>{
      return error;
    })
  }
  add: function (message) {
    return this.forge(message)
    .save({}, {require: true})
  },
  delete: function (id) {
    return this.where({message_id: id})
    .destroy({require: true})
  }
})
module.exports = bookshelf.model('Messages', Messages)

const { bookshelf } = require('../db/database')

require('./academics')
require('./messages')

const Teachers = bookshelf.Model.extend({
  tableName: 'teachers',
  Academics: function() { return this.belongsToMany('Academics').through('Class')},
  message: function() { return this.belongsToMany('messsages').through('messages')}
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
    return this.where({teacher_id: id})
    .fetch()
    .then((teacher)=>{
      return teacher;
    })
    .catch((error)=>{
      return error;
    })
  },
  add: function (teacher) {
    return this.forge(teacher)
    .save({}, {require: true})
  },
  delete: function (id) {
    return this.where({teacher_id: id})
    .destroy({require: true})
  },
  dependencies: ['Class', 'Messages']
  })
module.exports = bookshelf.model('Teachers', Teachers)

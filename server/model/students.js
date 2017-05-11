const { bookshelf } = require('../db/database')
require('./family');
require('./messages');
require('./class');
require('./academics');


const Students = bookshelf.Model.extend({
  tableName: 'students',
  parent: function() { return this.belongsToMany('Parent').through('Family')},
  Academics: function() { return this.belongsToMany('Academics').through('Class')},
  message: function() { return this.belongsToMany('messsage').through('messages')}
}, {
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then((rows)=>{
      return rows
    })
    .catch((error)=> {
      return error
    })
  },
  getById: function (id) {
    return this.where({student_id: id})
    .fetch()
    .then((student)=> {
      return student;
    })
    .catch((error)=>{
      return error;
    })
  },
  delete: function (id) {
    return this.where({student_id: id})
    .destroy({require: true})
  },
  add: function (student) {
    return this.forge(student)
    .save({}, {require: true})
  },

  dependents: [ 'family', 'message', 'class', ]
})
module.exports = bookshelf.model('Students', Students)

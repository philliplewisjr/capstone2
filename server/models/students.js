const { bookshelf } = require('../db/database')
 // require('./family')
 // require('./messages')
 // require('./class')
 // require('./academics')
 // require('./parents')



const Students = bookshelf.Model.extend({
  tableName: 'students'
  // parent: function() { return this.belongsToMany('Parents').through('Family')},
  // class: function() { return this.belongsToMany('Class')},
  // teachers: function() { return this.belongsToMany('Teachers').through('Class')},
  // message: function() { return this.belongsToMany('Messsages')}

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
    return this.where({id: id})
    .fetch()
    .then((student)=> {
      return student;
    })
    .catch((error)=>{
      return error;
    })
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  },
  add: function (student) {
    return this.forge(student)
    .save({}, {require: true})
    .then(res => res)
  }

  // dependents: [ 'Parents', 'Academics', 'Messages' ]
})
module.exports = bookshelf.model('Students', Students)

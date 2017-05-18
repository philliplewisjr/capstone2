const { bookshelf } = require('../db/database')
 require('./family')
 require('./messages')
 require('./class')
 require('./academics')
 require('./parents')



const Students = bookshelf.Model.extend({
  tableName: 'students',
  parent: function() { return this.belongsToMany('Parents').through('Family')},
  teachers: function() { return this.belongsToMany('Teachers').through('Class')},
  message: function() { return this.belongsToMany('Messsages')}
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
  },
  update: function(body, id) {
    return this.where({id: id})
    .save(body, {patch: true})
    .then(() => {
      return {"message": "Student Updated"}
    })
    .catch((err) => {
      return err;
    })
  },

  dependents: [ 'Family', 'Class', 'Messages' ]
})
module.exports = bookshelf.model('Students', Students)

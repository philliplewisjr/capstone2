const { bookshelf } = require('../db/database')

require('./class')
require('./messages')
require('./academics')
require('./students')

const Teachers = bookshelf.Model.extend({
  tableName: 'teachers',
  class: function() { return this.belongsToMany('Students').through('Class')},
  message: function() { return this.belongsToMany('messsages')}
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
    .then((teacher)=>{
      return teacher;
    })
    .catch((error)=>{
      return error;
    })
  },
  add: function (teacher) {
    console.log(teacher)
    return this.forge(teacher)
    .save()
    .then(()=> res.status(200).json({"msg": "teacher"}))
    .catch((err)=> next(err))
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  },
  update: function(body, id) {
    return this.where({id: id})
    .save(body, {patch: true})
    .then(() => {
      return {"message": "Teacher Updated"}
    })
    .catch((err) => {
      return err;
    })
  },
  dependents: [ 'Messages', 'Academics','Students']
  })
module.exports = bookshelf.model('Teachers', Teachers)

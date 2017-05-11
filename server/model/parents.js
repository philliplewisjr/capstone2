const bookshelf = require('../db/database')

require('./students')

const Parents = bookshelf.model.extend({
  tableName: 'parents',
  student: function () { return this.belongsToMany('Students').through('Family')}
}, {
  all: function () {
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
    return this.where({parent_id: id})
    .fetch()
    .then((parent)=>{
      return parent;
    })
    .catch((error)=>{
      return error;
    })
  },
  add: function (parent) {
    return this.forge(parent)
    .save({}, {require: true})
  },
  delete: function (id) {
    return this.where({parent: id})
    .destroy({require: true})
  },
  dependencies: ['family']
})
module.exports = bookshelf.model('Parents', Parents)

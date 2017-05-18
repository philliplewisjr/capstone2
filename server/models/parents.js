const { bookshelf } = require('../db/database')

require('./students')

const Parents = bookshelf.Model.extend({
  tableName: 'parents',
  student: function () { return this.belongsToMany('Students').through('Family')}
  // bycrypt: { field: 'password'},
  // comparePass: function (passowordStr) {
  //   console.log("passowrd string form user", passwordStr)
  //   console.log("user", this.attributes);
  //   return compare(passwordStr, this.attributes.password)
  // }
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
    return this.where({id: id})
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
    return this.where({id: id})
    .destroy({require: true})
  },
  update: function(body, id) {
    return this.where({id: id})
    .save(body, {patch: true})
    .then(() => {
      return {"message": "Information Updated"}
    })
    .catch((err) => {
      return err;
    })
  },
  dependencies: ['family']
})
module.exports = bookshelf.model('Parents', Parents)

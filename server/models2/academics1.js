const { bookshelf } = require('../db/database');




const Academic = bookshelf.Model.extend({
  tableName: 'academics'
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
  getOne: function (id) {
    return this.where({id: id})
    .fetchAll()
    .then((academic)=>{
      return academic;
    })
    .catch((error)=>{
      return error;
    })
  },
  delete: function (id) {
    return this.where({id: id})
    .destroy({require: true})
  },
  add: function (academic) {
    return this.forge(academic)
    .save({}, {require: true})
  },
  update: function(body, id) {
    return this.where({id: id})
    .save(body, {patch: true})
    .then(() => {
      return {"message": "Academics Updated"}
    })
  }

})

module.exports = bookshelf.model('Academic', Academic)

'use strict';

// <require class>
// < use model methods for getting all Classes and one class then send the response back with the data>

const Classes = require('../models2/class1')

function getAllClass(req, res, next) {
  Classes.getAll()
                .then(rows => res.status(200).json(rows))
                .catch(error => res.status(404).json(error))
}

function getClass(req, res, next) {
  const { params } = req;
  const id = params.id
  Classes.getById(id)
                .then(classFirst => res.status(200).json(classFirst))
                .catch(error => res.status(404).json(error))
}

function addClass(req, res, next) {
  const newClass = req.body;
  Classes.add(newClass)
                     .then(newClass => res.status(200).json(newClass))
                     .catch(error => res.status(404).json(error))
}

function deleteClass(req, res, next) {
  const { params } = req;
  const id = params.id;
  Classes.delete(id)
                 .then(dclass => res.status(200).json(dclass))
                 .catch(error => res.status(404).json(error))
}

function updateClass({params: {id}, body}, res, next) {
  console.log("id", id)
  console.log("body", body)
  Classes.update(body, id)
  .then(() =>{
    res.status(200).json({"msg": "successfull"})
  })
  .catch((err)=>{ next(err)})
}


module.exports = { getAllClass, getClass, addClass, deleteClass, updateClass }

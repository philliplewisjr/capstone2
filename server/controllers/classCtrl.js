'use strict';

// <require class>
// < use model methods for getting all Classes and one class then send the response back with the data>

const Class = require('../models/class')

function getAllClass(req, res, next) {
  Class.getAll()
                .then(rows => res.status(200).json(rows))
                .catch(error => res.status(404).json(error))
}

function getClass(req, res, next) {
  const { params } = req;
  const id = params.id
  Class.getById(id)
                .then(classFirst => res.status(200).json(classFirst))
                .catch(error => res.status(404).json(error))
}

function addClass(req, res, next) {
  const newClass = req.body;
  Class.add(newClass)
                     .then(newClass => res.status(200).json(newClass))
                     .catch(error => res.status(404).json(error))
}

function deleteClass(req, res, next) {
  const { params } = req;
  const id = params.id;
  Class.delete(id)
                 .then(dclass => res.status(200).json(dclass))
                 .catch(error => res.status(404).json(error))
}

module.exports = { getAllClass, getClass, addClass, deleteClass }

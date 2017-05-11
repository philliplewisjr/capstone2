'use strict';

// <require class>
// < use model methods for getting all academics and one academic then send the response back with the data>

const Class = require('../model/class')

function getAllClass(req, res, next) {
  Class.getAll()
                .then(rows => res.status(200).json(rows))
}

function getClass(req, res, next) {
  const { params } = req;
  const id = params.id
  Class.getById()
                .then(class => res.status(200).json(class))
                .catch(class => res.status(404).json(error))
}

function addClass(req, res, next) {
  const newClass = req.body;
  Class.add(newClass)
                     .then(newClass => res.status(200).json(class))
                     .catch(error => res.status(404).json(error))
}

function deleteClass(req, res, next) {
  const { params } = req;
  const id = params.id;
  Class.delete(id)
                 .then(dclass => res.status(200).json(dclass))
                 .catch(error => res.status(404).json(error))
}

module.exports = { getAllClass, getClass, addClass, deleteClass}

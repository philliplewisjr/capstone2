'use strict';

// <require Teachers>
// < use model methods for getting all Teachers and one Teacher then send the response back with the data>

const Teachers = require('../model/teachers')

function getAllTeachers(req, res, next) {
  Teachers.getAll()
                  .then(rows => res.status(200).json(rows))
                  .catch(error => res.status(404).json(error))
}

function getTeacher(req, res, next) {
  const { params } = req;
  const id = params.id;
  Teachers.getById(id)
                      .then(teacher => res.status(200).json(teacher))
                      .catch(error => res.status(404).json(error))
}
function addTeacher(req, res, next) {
  const teacher = req.body;
  Teachers.add(teacher)
                        .then(teacher => res.status(200).json(teacher))
                        .catch(error => res.status(404).json(error))
}
function deleteTeacher(req, res, next) {
  const { params } = req;
  const id = params.id;
  Teachers.delete(id)
                    .then(teacher => res.status(200).json(teacher))
                    .catch(error => res.status(404).json(error))
}

module.exports = { getAllTeachers, getTeacher, addTeacher, deleteTeacher }

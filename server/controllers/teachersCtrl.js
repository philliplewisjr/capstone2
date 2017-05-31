'use strict';

// <require Teachers>
// < use model methods for getting all Teachers and one Teacher then send the response back with the data>

const Teacher = require('../models2/teachers1')

function getAllTeachers(req, res, next) {
  Teacher.getAll()
                  .then(rows => res.status(200).json(rows))
                  .catch(error => res.status(404).json(error))
}

function getTeacher(req, res, next) {
  const { params } = req;
  const id = params.id;
  Teacher.getById(id)
                      .then(teacher => res.status(200).json(teacher))
                      .catch(error => res.status(404).json(error))
}
function addTeacher(req, res, next) {
  const teacher = req.body;
  Teacher.add(teacher)
                        .then(teacher => res.status(200).json(teacher))
                        .catch(error => res.status(404).json(error))
}
function deleteTeacher(req, res, next) {
  const { params } = req;
  const id = params.id;
  Teacher.delete(id)
                    .then(teacher => res.status(200).json(teacher))
                    .catch(error => res.status(404).json(error))
}
function updateTeacher({params: {id}, body}, res, next) {
  console.log("id", id)
  console.log("body", body)
  Teacher.update(body, id)
  .then(() =>{
    res.status(200).json({"msg": "Successfully Updated"})
  })
  .catch((err)=>{ next(err)})
}

module.exports = { getAllTeachers, getTeacher, addTeacher, deleteTeacher, updateTeacher }

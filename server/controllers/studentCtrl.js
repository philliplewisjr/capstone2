'user strict';

// <require students>
// < use model methods for getting all Students and one Student then send the response back with the data>

const Students = require('../models/students')

function getAllStudents(req, res, next) {
  Students.getAll()
                  .then(rows => res.status(200).json(rows))
                  .catch(error => res.status(404).json(error))

}

function getStudent(req, res, next) {
  const { params } = req;
  const id = params.id;
  Students.getById(id)
                      .then(student => res.status(200).json(student))
                      .catch(error => res.status(404).json(error))
}

function addStudent(req, res, next) {
  const student = req.body;
  console.log(req.body)
  Students.add(student)
                      .then(student => res.status(200).json(student))
                      .catch(error => res.status(404).json(error))
}

function deleteStudent(req, res, next) {
  const { params } = req;
  const id = params.id;
  Students.delete(id)
                  .then(student => res.status(200).json(student))
                  .catch(error => res.status(404).json(error))
}

function updateStudent({params: {id}, body}, res, next) {
  console.log("id", id)
  console.log("body", body)
  Students.update(body, id)
  .then(() =>{
    res.status(200).json({"msg": "successfull"})
  })
  .catch((err)=>{ next(err)})
}

module.exports = { getAllStudents, getStudent, addStudent, deleteStudent, updateStudent }

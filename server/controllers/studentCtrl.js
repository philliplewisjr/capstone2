'user strict';

// <require students>
// < use model methods for getting all Students and one Student then send the response back with the data>

const Student = require('../models2/student1')

function getAllStudents(req, res, next) {
  Student.getAll()
                  .then(rows => res.status(200).json(rows))
                  .catch(error => res.status(404).json(error))

}

function getStudent(req, res, next) {
  const { params } = req;
  const id = params.id;
  Student.getById(id)
                      .then(student => res.status(200).json(student))
                      .catch(error => res.status(404).json(error))
}

function addStudent(req, res, next) {
  const student = req.body;
  console.log(req.body)
  Student.add(student)
                      .then(student => res.status(200).json(student))
                      .catch(error => res.status(404).json(error))
}

function deleteStudent(req, res, next) {
  const { params } = req;
  const id = params.id;
  Student.delete(id)
                  .then(student => res.status(200).json(student))
                  .catch(error => res.status(404).json(error))
}

function updateStudent({params: {id}, body}, res, next) {
  console.log("id", id)
  console.log("body", body)
  Student.update(body, id)
  .then(() =>{
    res.status(200).json({"msg": "successfull"})
  })
  .catch((err)=>{ next(err)})
}

function getStudentClass({params: {id}}, res, next) {
  console.log(id)
  Student.where({id: id}).fetch({withRelated: ['class.academics', 'class.teachers']})
                          .then(function(student){console.log(student.related("class").toJSON());
                            res.status(200).json(student)
                          })
                          .catch(function(err) {
                            console.error(err)
                          })
}

module.exports = { getAllStudents, getStudent, addStudent, deleteStudent, updateStudent, getStudentClass }

'use strict';

// <require academics>
// < use model methods for getting all academics and one academic then send the response back with the data>


const Academic = require('../models2/academics1')

function getAllAcademics(req, res, next) {
  Academic.getAll()
                    .then(rows => res.status(200).json({rows}))
                    .catch(error => res.status(404).json(error))
}

function getAcademicsById(req, res, next) {
  const { params } = req
  const id = params.id
  Academic.getOne(id)
                    .then(academic => res.status(200).json({academic}))
                    .catch(error => res.status(404).json(error))
}

function createAcademic(req, res, next) {
  const academic = req.body;
  Academic.add(academic)
                        .then(academic => res.status(200).json(academic))
                        .catch(error => res.status(404).json(error))

}

function deleteAcademic(req, res, next) {
  const {params} = req;
  const id = params.id;
  Academic.delete(id)
                      .then(academic => res.status(200).json(academic))
                      .catch(error => res.status(404).json(academic))
}

function updateAcademic({params: {id}, body}, res, next) {
  console.log("id", id)
  console.log("body", body)
  Academic.update(body, id)
                          .then(() =>{res.status(200).json({"msg": "successfull"})})
                          .catch((err)=>{ next(err)})
}

module.exports = { getAllAcademics, getAcademicsById, createAcademic, deleteAcademic, updateAcademic }

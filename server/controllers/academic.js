'use strict';

// <require academics>
// < use model methods for getting all academics and one academic then send the response back with the data>


const Academics = require('../model/academics')

function getAllAcademics(req, res, next) {
  Academics.getAllAcademics()
                            .then(rows => res.status(200).json({rows}))
}

function getAcademicsById(req, res, next) {
  const { params } = req
  const id = params.id
  Academics.getSingleAcademic(id)
                              .then(academic => res.status(200).json({academic}))
                              .catch(error => res.status(404).json(error))
}

function createAcademic(req, res, next) {
  const academic = req.body;
  Academics.add(academic)
                        .then(academic => res.status(200).json(academic))
                        .catch(error => res.status(404).json(error))

}

function deleteAcademic(req, res, next) {
  const {params} = req;
  const id = params.id;
  Academics.delete(id)
                      .then(academic => res.status(200).json(academic))
                      .catch(error => res.status(404).json(academic))
}

module.exports = { getAllAcademics, getAcademicsById, createAcademic, deleteAcademic }

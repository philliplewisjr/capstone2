'user strict';

// <require parents>
// < use model methods for getting all Parents and one Parent then send the response back with the data>

const Parents = require('../models/parents')

function getAllParents(req, res, next) {
  Parents.all()
              .then(rows => res.status(200).json(rows))
              .catch(error => res.status(404).json(error))
}

function getParent(req, res, next) {
  const { params } = req;
  const id = params.id;
  Parents.getById(id)
                  .then(parent => res.status(200).json(parent))
                  .catch(error => res.status(404).json(error))
}

function addParent(req, res, next) {
  const parent = req.body;
  Parents.add(parent)
                    .then(parent => res.status(200).json(parent))
                    .catch(error => res.status(200).json(error))
}

function deleteParent(req, res, next) {
  const { params } = req;
  const id = params.id;
  Parents.delete(id)
                    .then(parent => res.status(200).json(parent))
                    .catch(error => res.status(404).json(error))
}

module.exports = { getAllParents, getParent, addParent, deleteParent }

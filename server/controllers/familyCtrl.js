'use strict';

const Family = require('../models/family')

// <require Family>
// < use model methods for getting all Families and one Family then send the response back with the data>

function getAllFamilies(req, res, next) {
  Family.getAll()
                .then(rows => res.status(200).json(rows))
}

function getFamily(req, res, next) {
  const { params } = req;
  const id = params.id;
  Family.getById(id)
                  .then(family => res.status(200).json(family))
                  .catch(error => res.status(404).json(error))
}
function deleteFamily(req, res, next) {
  const { params } = req;
  const id = params.id;
    Family.delete(id)
                    .then(teacher => res.status(200).json(teacher))
                    .catch(error => res.status(404).json(error))

}

module.exports = { getAllFamilies, getFamily, deleteFamily }

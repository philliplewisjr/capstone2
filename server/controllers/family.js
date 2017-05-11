'use strict';

const Family = require('../model/family')

// <require Family>
// < use model methods for getting all Families and one Family then send the response back with the data>

function getAllFamilies(req, res, next) {
  Family.getAll()
                .then(rows => res.status(200).json(rows))
}

function getFamily(req, res, next) {
  const { params } = req;
  const id = params.id;
  Family.getOne(id)
                  .then(family => res.status(200).json(family))
                  .catch(error => res.status(404).json(error))
}

module.exports = { getAllFamilies, getFamily }

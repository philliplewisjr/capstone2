'user strict';

// <require the express Router>
// <require the ParentCtrl to get access to its methods>

// <define routes for getting all Parents and a Parent student>

const { Router } = require('express')
const parentRouter = Router()

const { getAllParents,
          getParent,
          addParent,
          deleteParent } = require('../controllers/parentsCtrl')

parentRouter.get('/parents', getAllParents);
parentRouter.get('/parents/:id', getParent);
parentRouter.delete('/parents/:id', deleteParent);
parentRouter.post('/parent', addParent);

module.exports = parentRouter

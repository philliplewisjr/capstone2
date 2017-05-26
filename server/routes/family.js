'user strict';

// <require the express Router>
// <require the FamilyCtrl to get access to its methods>

// <define routes for getting all Families and a Family>

const { Router } = require('express')
const familyRouter = Router()

    const { getAllFamilies,
            getFamily, deleteFamily } = require('../controllers/familyCtrl')


        familyRouter.get('/family', getAllFamilies)
        familyRouter.get('/family/:id', getFamily)
        familyRouter.delete('/family/:id', deleteFamily)

module.exports = familyRouter

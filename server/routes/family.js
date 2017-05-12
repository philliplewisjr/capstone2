'user strict';

// <require the express Router>
// <require the FamilyCtrl to get access to its methods>

// <define routes for getting all Families and a Family>

const { Router } = require('express')
const familyRouter = Router()

    const { getAllFamilies,
            getFamily } = require('../controllers/familyCtrl')


        familyRouter.get('/family', getAllFamilies)
        familyRouter.get('/family/:id', getFamily)

module.exports = familyRouter

'user strict';

// <require the express Router>
// <require theAcademciCtrl to get access to its methods>

// <define routes for getting all Academics and a Academic>

const { Router } = require('express')
const academicRouter = Router()

    const { getAllAcademics,
            getAcademicsById,
            createAcademic,
            deleteAcademic } = require('../controllers/academicCtrl')


        academicRouter.get('/academic', getAllAcademics)
        academicRouter.get('/academic/:id', getAcademicsById)
        academicRouter.post('/academic', createAcademic)
        academicRouter.delete('/academic/:id', deleteAcademic)


module.exports = academicRouter

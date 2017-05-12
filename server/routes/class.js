'user strict';

// <require the express Router>
// <require the MessageCtrl to get access to its methods>

// <define routes for getting all Messages and a Message>

const { Router } = require('express')
const classRouter = Router()

const { getAllClass,
        getClass,
        addClass,
        deleteClass } = require('../controllers/classCtrl')


        classRouter.get('/class', getAllClass)
        classRouter.get('/class/:id', getClass)
        classRouter.delete('/class/:id', deleteClass)
        classRouter.post('/class', addClass)

module.exports = classRouter

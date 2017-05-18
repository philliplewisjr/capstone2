'use strict';

const { Router } = require('express')
const teacherRouter = Router()

const { getAllTeachers,
          getTeacher,
          deleteTeacher,
          addTeacher } = require('../controllers/teachersCtrl')

teacherRouter.get('/teachers', getAllTeachers)
teacherRouter.get('/teachers/:id', getTeacher)
teacherRouter.delete('/teachers/:id', deleteTeacher)
teacherRouter.post('/teachers', addTeacher)

module.exports = teacherRouter;

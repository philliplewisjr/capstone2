'use strict';

const { Router } = require('express')
const teacherRouter = Router()

const { getAllTeachers,
          getTeacher,
          deleteTeacher,
          addTeacher, updateTeacher } = require('../controllers/teachersCtrl')

teacherRouter.get('/teachers', getAllTeachers)
teacherRouter.get('/teachers/:id', getTeacher)
teacherRouter.delete('/teachers/:id', deleteTeacher)
teacherRouter.post('/teachers', addTeacher)
teacherRouter.patch('/teachers/:id', updateTeacher)


module.exports = teacherRouter;

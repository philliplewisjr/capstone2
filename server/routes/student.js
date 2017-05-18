'use strict';

// <require the express Router>
// <require the StudentCtrl to get access to its methods>

// <define routes for getting all Students and a single student>

const express = require('express')
const Router = express.Router
const studentRoute = Router()

const {
      getAllStudents,
      getStudent,
      deleteStudent,
      addStudent, updateStudent } = require('../controllers/studentCtrl')

studentRoute.get('/students', getAllStudents)
studentRoute.get('/students/:id', getStudent)
studentRoute.delete('/students/:id', deleteStudent)
studentRoute.post('/students', addStudent)
studentRoute.patch('/students/:id', updateStudent)

module.exports = studentRoute;

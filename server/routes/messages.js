'user strict';

// <require the express Router>
// <require the MessageCtrl to get access to its methods>

// <define routes for getting all Messages and a Message>

const { Router } = require('express')
const parentRouter = Router()

const { getAllMessages,
        getMessage,
        deleteMessage,
        addMessage
         } = require('../controllers/messagesCtrl')


        parentRouter.get('/messages', getAllMessages)
        parentRouter.get('/messages/:id', getMessage)
        parentRouter.delete('/messages/:id', deleteMessage)
        parentRouter.post('/messages', addMessage)

module.exports = parentRouter

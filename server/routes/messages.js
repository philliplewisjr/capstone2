'user strict';

// <require the express Router>
// <require the MessageCtrl to get access to its methods>

// <define routes for getting all Messages and a Message>

const { Router } = require('express')
const messagesRouter = Router()

const { getAllMessages,
        getMessage,
        deleteMessage,
        addMessage
         } = require('../controllers/messagesCtrl')


        messagesRouter.get('/messages', getAllMessages)
        messagesRouter.get('/messages/:id', getMessage)
        messagesRouter.delete('/messages/:id', deleteMessage)
        messagesRouter.post('/messages', addMessage)

module.exports = messagesRouter

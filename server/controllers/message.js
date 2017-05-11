'user strict';

// <require Messages>
// < use model methods for getting all Messages and one Message then send the response back with the data>

const Messages = require('../model/messages')

function getAllMessages(req, res, next) {
  Messages.getAll()
                  .then(rows => res.status(200).json(rows))
                  .catch(error => res.status(404).json(error))
}

function getMessage(req, res, next) {
  const { params } req;
  const id = params.id;
  Message.getMessage(id)
                        .then(message => res.status(200).json(message))
                        .catch(error => res.status(404).json(error))

}

function addMessage(req, res, next) {
  const message = req.body;
  Message.add(message)
                      .then(message => res.status(200).json(message))
                      .catch(error => res.status(404).json(error))

}

function deleteMessage(req, res, next) {
  const { params } = req;
  const id = params.id;
  Message.delete(id)
                    .then(message => res.status(200).json(message))
                    .catch(error => res.status(404).json(error))
}

module.exports = { getAllmessages, getMessage, addMessage, deleteMessage }

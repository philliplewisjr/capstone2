'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const router = require('./routes/');
const cors = require('cors')
const app = express()
const { PORT } = require('./env_config')

app.use(cors())
app.use(express.static('client'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/v1/', router);

//catch 404 errors
app.use( (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err)
})

//user error
app.use((err, req, res, next)=> {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  })
})

// console.log()
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
});
module.exports = app;

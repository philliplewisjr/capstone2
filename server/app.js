'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/v1/', routes);

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

const port = process.env.PORT || 3000;
app.list(port, ()=>{
  console.log(process.evn.NODE_ENV)
  console.log(`Listening on port ${port}`)
});
module.exports = app;

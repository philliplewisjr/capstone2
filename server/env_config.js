'use strict';

//makes available the .env file
require('dotenv').config()

const PORT = process.env.PORT || 5000
const ROOT_PATH = `http://localhost:${PORT}`

module.exports = { PORT, ROOT_PATH }

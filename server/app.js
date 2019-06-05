'use strict'

/**
 * Dependencies
 */

const express = require('express')
const cors = require('cors')

/**
 * Constants
 */

const port = process.env.PORT || 8080

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(cors())
app.use(express.json())

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/accounts', require('./routes/accounts_router'))

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express running on port ${port}.`)
  })
}

/**
 * Export app
 */

module.exports = app

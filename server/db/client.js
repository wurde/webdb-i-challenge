'use strict'

/**
 * Dependencies
 */

const knex = require('knex')

/**
 * Constants
 */

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/db/budget.sqlite',
    },
    useNullAsDefault: true,
  }
}

/**
 * Define db client
 */

const client = knex(config.development)

/**
 * Export db client
 */

module.exports = client

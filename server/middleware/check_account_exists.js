'use strict'

/**
 * Dependencies
 */

const Account = require('../models/Account')

/**
 * Define middleware
 */

async function check_account_exists(req, res, next) {
  if (req.params.id) {
    let account = await Account.find(req.params.id)

    if (!account) {
      return res.status(404).json({ error: { message: `Account not found for ID '${req.params.id}'.` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = check_account_exists

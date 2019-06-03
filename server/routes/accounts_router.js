'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Account = require('../models/Account')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */

// GET,POST /accounts
router.route('/')
  .get((req, res) => {
    res.sendStatus(200)
  })
  .post((req, res) => {
    res.sendStatus(200)
  })

// GET,PUT,DELETE /accounts/:id
router.route('/')
  .get((req, res) => {
    res.sendStatus(200)
  })
  .put((req, res) => {
    res.sendStatus(200)
  })
  .delete((req, res) => {
    res.sendStatus(200)
  })

/**
 * Export router
 */

module.exports = router

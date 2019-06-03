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
  .get(async (req, res) => {
    try {
      let accounts = await Account.all()
      res.status(200).json(accounts)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error during accounts fetch.' }})
    }
  })
  .post(async (req, res) => {
    res.sendStatus(200)
  })

// GET,PUT,DELETE /accounts/:id
router.route('/:id')
  .get(async (req, res) => {
    res.sendStatus(200)
  })
  .put(async (req, res) => {
    res.sendStatus(200)
  })
  .delete(async (req, res) => {
    res.sendStatus(200)
  })

/**
 * Export router
 */

module.exports = router

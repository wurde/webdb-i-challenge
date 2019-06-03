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
    if (!req.body) {
      res.status(400).json({ error: { message: 'Missing form data.' }})
    }
    if (!req.body.name) {
      res.status(400).json({ error: { message: 'Missing name value.' }})
    }
    if (!req.body.budget) {
      res.status(400).json({ error: { message: 'Missing budget value.' }})
    }

    try {
      let account = await Account.insert({
        name: req.body.name,
        budget: req.body.budget
      })
      res.status(201).json(account)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error during account creation.' }})
    }
  })

// GET,PUT,DELETE /accounts/:id
router.route('/:id')
  .get(async (req, res) => {
    try {
      let account = await Account.find(req.params.id)

      if (account) {
        res.status(200).json(account)
      } else {
        res.status(404).json({ error: { message: `Account not found for ID '${req.params.id}'.` }})
      }
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error during account fetch.' }})
    }
  })
  .put(async (req, res) => {
    try {
      let account = await Account.find(req.params.id)

      if (account) {
        await Account.update(req.params.id, {
          name: (req.body.name || account.name),
          budget: (req.body.budget || account.budget)
        })
        res.sendStatus(200)
      } else {
        res.status(404).json({ error: { message: `Account not found for ID '${req.params.id}'.` }})
      }
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error during account update.' }})
    }
  })
  .delete(async (req, res) => {
    res.sendStatus(200)
  })

/**
 * Export router
 */

module.exports = router

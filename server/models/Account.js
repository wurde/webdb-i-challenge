'use strict'

/**
 * Dependencies
 */

const db = require('../db/client')

/**
 * Define model
 */

class Account {
  static async all(query={}) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query
    const offset = limit * (page - 1)

    let rows = await db('accounts')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset)

    return rows
  }

  static async find(id) {
    return await db('accounts').where({ id }).first()
  }

  static async insert(account) {
    const [id] = await db('accounts').insert(account)

    let new_account = await db('accounts').where({ id }).first()

    return new_account
  }

  static async update(id, changes) {
    return await db('accounts').where({ id }).update(changes, '*')
  }

  static async remove(id) {
    return await db('accounts').where({ id }).del()
  }
}

/**
 * Export model
 */

module.exports = Account

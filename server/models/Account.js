'use strict'

/**
 * Dependencies
 */

const db = require('../db/client')

/**
 * Define model
 */

class Account {
  static async find(query={}) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query
    const offset = limit * (page - 1)

    let rows = await db('accounts')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset)

    return rows
  }

  static async findById(id) {
    return await db('accounts')
      .where({ id })
      .first()
  }

  static async add(account) {
    const [id] = await db('accounts').insert(account)

    return findById(id)
  }

  static async remove(id) {
    return await db('accounts')
      .where({ id })
      .del()
  }

  static async update(id, changes) {
    return await db('accounts')
      .where({ id })
      .update(changes, '*')
  }
}

/**
 * Export model
 */

module.exports = Account

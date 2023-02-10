/* eslint-disable camelcase */
const { PgLiteral } = require('node-pg-migrate')

exports.shorthands = { 
    id: {
      type: 'uuid', 
      primaryKey: true 
    }, 
    createdAt: { 
      type: 'timestamp', 
      notNull: true, 
      default:  PgLiteral.create("CURRENT_TIMESTAMP")
    } 
  }

exports.up = (pgm) => {
    pgm.createTable('users', {
      id: 'id',
      name: { type: 'varchar(1000)', notNull: true },
      createdAt: 'createdAt',
    })
    pgm.createTable('posts', {
      id: 'id',
      userId: {
        type: 'uuid',
        notNull: true,
        references: '"users"',
        onDelete: 'cascade',
      },
      body: { type: 'text', notNull: true },
      createdAt: 'createdAt' ,
    })
    pgm.createIndex('posts', 'userId')
  }

exports.down = pgm => {
    pgm.dropTable('posts', {
        ifExists: true,
        cascade: true,
    })
    pgm.dropTable('users', {
        ifExists: true,
    })    
};
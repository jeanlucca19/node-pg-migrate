/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('products', {
        id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createTable('posts', {
        id: 'id',
        productId: {
            type: 'integer',
            notNull: true,
            references: '"products"',
            onDelete: 'cascade',
        },
        body: { type: 'text', notNull: true },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createIndex('posts', 'productId')
};

exports.down = pgm => { };

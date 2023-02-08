/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`SELECT create_hypertable('users', 'createdAt')`)
};

exports.down = pgm => { };

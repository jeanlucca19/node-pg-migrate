/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.sql(`SELECT create_hypertable('"posts"', 'postAt') CREATE_DEFAULT_INDEXES false;`)
};

exports.down = pgm => { };

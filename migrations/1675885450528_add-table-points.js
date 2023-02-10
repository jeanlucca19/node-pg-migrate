/* eslint-disable camelcase */

exports.up = pgm => {
    pgm.createTable('points', {        
        datetime: {
            type: 'timestamp',
        },
        value: { type: 'real', },
    }),

    pgm.sql(`SELECT create_hypertable('points', 'datetime')`)

};

exports.down = pgm => {
    pgm.dropTable('points', {
        ifExists: true
    })
};

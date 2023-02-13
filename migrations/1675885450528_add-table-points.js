/* eslint-disable camelcase */

exports.up = pgm => {
    pgm.createTable('points', {        
        datetime: {
            type: 'timestamp',
        },
        value: { type: 'real', },
    }, {
        ifNotExists: true    
    },

    pgm.sql(`SELECT create_hypertable('points', 'datetime', if_not_exists => TRUE)`)

    )
};

exports.down = pgm => {
    pgm.dropTable('points', {
        ifExists: true
    })
};

/* eslint-disable camelcase */
exports.up = pgm => {
    pgm.addColumns( 'users', {
        email: { type: 'varchar(100)' },
        phone: { type: 'varchar(100)' },
    } )
};

exports.down = pgm => {
    pgm.dropColumns( 'users', 
        ['email', 'phone'] )
 };

/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: 'id',
        user_name: {type: 'text', notNull: true},
        user_email: {type: 'text', notNull: true},
        user_password: {type: 'text', notNull: true},
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    }),

};

pgm.sql(`

    `)

exports.down = pgm => {};

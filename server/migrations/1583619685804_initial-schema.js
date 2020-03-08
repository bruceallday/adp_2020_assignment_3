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

    pgm.createTable('user_posts', {
        id: 'id',
        post_title: {type: 'text', notNull: true},
        post_body: {type: 'text', notNull: true},
        post_tags: {type: 'text', notNull: true},
        post_likes: {type: 'int', notNull: true},
        post_user_id: {type: 'int', notNull: true},
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        }
    }),



};

pgm.sql(`

    `)

exports.down = pgm => {};

/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: 'id',
    user_name: { type: 'text', notNull: true, unique: true },
    user_email: { type: 'text', notNull: true, unique: true },
    user_password: { type: 'text', notNull: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('user_posts', {
    id: 'id',
    post_title: { type: 'text', notNull: true },
    post_body: { type: 'text', notNull: true },
    post_likes: { type: 'int'},
    post_user_id: { type: 'int', notNull: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.sql(``);
};

exports.down = (pgm) => {};

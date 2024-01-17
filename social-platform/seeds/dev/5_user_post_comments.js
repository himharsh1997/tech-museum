/**
 * @description User info table
 * @author Fize 
 */
const TABLES = require('../../app/constants/tables');

exports.seed = async function (knex) {
  const tableName = TABLES.USER_POST_COMMENTS;
  // Deletes ALL existing entries
  await knex.schema.hasTable(tableName).then(async (exists) => {
    if (!exists) {
      await knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.integer('post_id').notNullable();
        table.integer('user_id').notNullable();
        table.string('post_message', 255).notNullable();
        table.boolean('is_active');
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Adds created_at column with the current timestamp
        table.timestamp('updated_at').defaultTo(knex.fn.now()); // Adds updated_at column with the current timestamp


        table.foreign('post_id').references('id').inTable(TABLES.USER_POSTS);
        table.foreign('user_id').references('id').inTable(TABLES.USER_INFO);
      });
    } else {
      // Table already exists, no need to create it
      console.log(`Table '${tableName}' already exists. Skipping creation.`);
    }
  });
};

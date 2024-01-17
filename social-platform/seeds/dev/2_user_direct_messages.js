/**
 * @description User info table
 * @author Fize 
 */
const TABLES = require('../../app/constants/tables');

exports.seed = async function (knex) {
  const tableName = TABLES.USER_DIRECT_MESSAGES;

  // Deletes ALL existing entries
  await knex.schema.hasTable(tableName).then(async (exists) => {
    if (!exists) {
      await knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.integer('sender_id', 255).notNullable();
        table.integer('receiver_id', 255).notNullable();
        table.string('message').notNullable();
        table.boolean('is_active');
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Adds created_at column with the current timestamp
        table.timestamp('updated_at').defaultTo(knex.fn.now()); // Adds updated_at column with the current timestamp

        table.foreign('sender_id').references('id').inTable(TABLES.USER_INFO);
        table.foreign('receiver_id').references('id').inTable(TABLES.USER_INFO)
      });
    } else {
      // Table already exists, no need to create it
      console.log(`Table '${tableName}' already exists. Skipping creation.`);
    }
  });
};

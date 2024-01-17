/**
 * @description User info table
 * @author Fize 
 */
const TABLES = require('../../app/constants/tables');

exports.seed = async function (knex) {
  const tableName = TABLES.USER_INFO;

  // Deletes ALL existing entries
  await knex.schema.hasTable(tableName).then(async (exists) => {
    if (!exists) {
      await knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.string('user_id', 255).notNullable();
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
        table.integer('age');
        table.boolean('is_active');
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Adds created_at column with the current timestamp
        table.timestamp('updated_at').defaultTo(knex.fn.now()); // Adds updated_at column with the current timestamp
      });
    } else {
      // Table already exists, no need to create it
      console.log(`Table '${tableName}' already exists. Skipping creation.`);
    }
  });
};

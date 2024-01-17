# Create seed file
`knex seed:make <table_name> --env <env>`
# Run seed files
`knex seed:run` or `knex seed:run --knexfile <knexfilepath>` or `knex seed:run --specific=seed-filename.js --specific=another-seed-filename.js`

export function up(knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('score').notNullable().defaultTo(0)
    table.integer('high_score').notNullable().defaultTo(0)
  })
}

export function down(knex) {
  return knex.schema.dropTable('players')
}

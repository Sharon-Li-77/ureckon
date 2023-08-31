export async function seed(knex) {
  //for testing db
  // Deletes ALL existing entries
  await knex('players').del()

  // Inserts seed entries
  await knex('players').insert([
    { id: 1, name: 'banana' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'feijoa' },
  ])
}

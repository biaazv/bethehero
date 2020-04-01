
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //primary key
        table.increments();

        //campos da tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //relacionamento com a tabela de ongs
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
}
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};

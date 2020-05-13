exports.up = function(knex) {
    return knex.schema.createTable("reward", function(table) {
      table.int("id_task").notNullable();
      table.int("id_skill").notNullable();
      table.int("status").notNullable();

      table.foreign("id_skill").references('id').inTable('skills');
      table.foreign("id_task").references('id').inTable('tasks');
  
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable("reward");
};
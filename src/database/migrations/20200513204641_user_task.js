exports.up = function(knex) {
    return knex.schema.createTable("user_task ", function(table) {
      table.int("id_task").notNullable();
      table.int("user_id").notNullable();
      table.string("status").notNullable();

      table.foreign("user_id").references('id').inTable('users');
      table.foreign("id_task").references('id').inTable('tasks');
  
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable("user_task");
};
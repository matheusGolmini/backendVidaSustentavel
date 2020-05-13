exports.up = function(knex) {
    return knex.schema.createTable("tasks", function(table) {
      table.increments();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("start_date").notNullable();
      table.string("end_date").notNullable();
      table.string("description").notNullable()
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("tasks");
  };
  
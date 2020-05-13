exports.up = function(knex) {
    return knex.schema.createTable("user_skill", function(table) {
      table.int("skill_id").notNullable();
      table.int("user_id").notNullable();
      table.int("experience").notNullable();
      table.int("level").notNullable();

      table.foreign("user_id").references('id').inTable('users');
      table.foreign("skill_id").references('id').inTable('skills');
  
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable("user_skill");
};
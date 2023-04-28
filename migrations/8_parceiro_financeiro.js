/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('parceiros_Financeiros', (table)=>{
        table.increments('idParceiro').primary();
        table.string('imageParceiro').notNullable();
        table.string('nomeParceiro').notNullable();
        table.string('emailParceiro').notNullable()
        table.string('telefoneParceiro').notNullable();
        table.integer('estadoParceiro').notNullable()
        table.string('senhaParceiro').notNullable();
        table.string('entidade_Financeira').notNullable();
        table.string('data_Criacao').notNullable().defaultTo(knex.fn.now())

       
      
    }) 
};

/**idParceiro	imageParceiro	tipoParceria	nomeParceiro	emailParceiro	telefoneParceiro	senhaParceiro	estadoParceiro	
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('parceiros_Financeiros')
};




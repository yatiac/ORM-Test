import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
	return Promise.all([
		knex.schema.createTable("users", (table) => {
			table.increments("id").primary();
			table.string("email").unique().notNullable();
			table.string("name").notNullable();
		}),
	]);
}

export async function down(knex: Knex): Promise<any> {
	return Promise.all([knex.schema.dropTable("users")]);
}

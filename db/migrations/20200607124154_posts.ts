import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
	return Promise.all([
		knex.schema.createTable("posts", (table) => {
			table.increments("id").primary();
			table.string("title").notNullable();
			table.string("content").notNullable();
			table.integer("user_id").references("users.id");
		}),
	]);
}

export async function down(knex: Knex): Promise<any> {
    return Promise.all([knex.schema.dropTable("posts")]);
}

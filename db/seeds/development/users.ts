import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("users").del()
        .then(() => {
            // Inserts seed entries
            return knex("users").insert([
                { email: 'hola1@gmail.com', name: 'Hola1' },
                { email: 'hola2@gmail.com', name: 'Hola2' },
                { email: 'hola3@gmail.com', name: 'Hola3' },
                { email: 'hola4@gmail.com', name: 'Hola4' },
                { email: 'hola5@gmail.com', name: 'Hola5' },
                { email: 'hola6@gmail.com', name: 'Hola6' },
            ]);
        });
};

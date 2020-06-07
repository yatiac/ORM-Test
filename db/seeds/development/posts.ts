import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("posts").del()
        .then(() => {
            // Inserts seed entries
            return knex("posts").insert([
                { title: "Title1", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 1},
                { title: "Title2", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 2},
                { title: "Titledsds", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 4},
                { title: "Titledssdds", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 5},
                { title: "Title1dd", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 3},
                { title: "Titlesssss", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 1},
                { title: "Title1xssd", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 2},
                { title: "Title1skmkmkdsd", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 4},
                { title: "Title1dseedecee", content: "Ut eget tempus leo. Donec ac fermentum diam, ut vestibulum lorem. Mauris.", user_id: 6},
            ]);
        });
};

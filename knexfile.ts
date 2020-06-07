// Update with your config settings.
require("ts-node/register");

require("dotenv").config();

module.exports = {
	development: {
		client: "postgresql",
		connection: process.env.DB_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: __dirname + "/db/migrations",
		},
		seeds: {
			directory: __dirname + "/db/seeds/development",
		},
	},
};

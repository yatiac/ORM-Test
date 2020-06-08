import { Model } from "objection";

import Posts from './post'

export default class Users extends Model {
	static get tableName() {
		return "users";
	}

	static get relationMappings() {
		return {
			posts: {
				relation: Model.HasManyRelation,
				modelClass: Posts,
				join: {
					from: "users.id",
					to: "posts.user_id",
				},
			},
		};
	}
}



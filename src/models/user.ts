import { Model } from "objection";

import Posts from './post'

export default class Users extends Model {
	static get tableName() {
		return "users";
	}

	static get relationMappings() {
		return {
			posts: {
				relation: Model.BelongsToOneRelation,
				modelClass: Posts,
				join: {
					from: "posts.user_id",
					to: "users.id",
				},
			},
		};
	}
}



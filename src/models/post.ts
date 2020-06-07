import { Model } from "objection";

import Users from './user'

export default class Posts extends Model {
	static get tableName() {
		return "posts";
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: Users,
				join: {
					from: "posts.user_id",
					to: "users.id",
				},
			},
		};
	}
}
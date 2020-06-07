import { Model } from "objection";

import Users from './user'

export default class Posts extends Model {
	static get tableName() {
		return "posts";
	}

	static get relationMappings() {
		return {
			users: {
				relation: Model.HasManyRelation,
				modelClass: Users,
				join: {
					from: "users.id",
					to: "posts.user_id",
				},
			},
		};
	}
}
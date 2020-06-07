import { Request, Response } from "express";

import Users from "../models/user";

export async function getAllUsers(_: Request, res: Response) {
	const users = await Users.query();
	res.json(users);

	return;
}

export async function getUserAndPosts(req: Request, res: Response) {
	const userAndPosts = await Users.query()
		.withGraphJoined('posts')
		.findById(req.params.id);
	res.json(userAndPosts);

	return;
}

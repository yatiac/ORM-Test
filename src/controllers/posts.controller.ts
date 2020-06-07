import { Request, Response } from "express";

import Posts from "../models/post";

export async function getAllPosts(_: Request, res: Response) {
	const posts = await Posts.query();
	res.json(posts);

	return;
}

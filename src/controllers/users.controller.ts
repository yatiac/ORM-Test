import { Request, Response } from "express";

import Users from "../models/user";

export async function getAllUsers(_: Request, res: Response) {
	const users = await Users.query();
    res.json(users);
    
    return;
}

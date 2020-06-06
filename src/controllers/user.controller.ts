import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function allUsers(_: Request, res: Response) {
	const allUsers = await prisma.users.findMany().catch(err => res.send(err));

	return res.status(200).json(allUsers);
}

export async function createUser(req: Request, res: Response) {

    if (!req.body.name || !req.body.email) {
        res.status(400).send('Insufficient parameters')
    }

	await prisma.users
		.create({
			data: {
				email: req.body.email,
				name: req.body.name,
			},
		})
		.then((u) => res.send(u))
		.catch((e) => res.send(e));
}
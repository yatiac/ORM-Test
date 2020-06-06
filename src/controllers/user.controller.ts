import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function allUsers(_: Request, res: Response) {
	const allUsers = await prisma.users
		.findMany()
		.catch((err) => res.json({ error: err }));

	return res.status(200).json(allUsers);
}

export async function findUser(req: Request, res: Response) {
	await prisma.users
		.findOne({
			where: {
				id: parseInt(req.params.id),
			},
		})
		.then((user) => res.status(200).json(user))
		.catch((err) => res.status(400).json({ error: err }));

	return;
}

export async function createUser(req: Request, res: Response) {
	if (!req.body.name || !req.body.email) {
		return res.status(400).json({ error: "Insufficient parameters" });
	}

	await prisma.users
		.create({
			data: {
				email: req.body.email,
				name: req.body.name,
			},
		})
		.then((u) => res.json(u))
		.catch((err) => res.status(400).json({ error: err }));

	return;
}

export async function updateUser(req: Request, res: Response) {
	await prisma.users
		.update({
			where: {
				id: parseInt(req.params.id),
			},
			data: {
				name: req.body.name, // TODO Validar que en el request venga la propiedad name
			},
		})
		.then((u) => res.json({ msg: "Successfully updated", u }))
		.catch((err) => res.status(400).json({ error: err }));

	return;
}

export async function deleteUser(req: Request, res: Response) {
	await prisma.users
		.delete({
			where: {
				id: parseInt(req.params.id),
			},
		})
		.then((u) => res.status(200).json({ msg: "Successfully deleted", u }))
		.catch((err) => res.status(400).json({ error: err }));

	return;
}

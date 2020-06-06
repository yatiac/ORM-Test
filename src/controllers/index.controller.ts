import { Request, Response } from "express";

export function index(_: Request, res: Response) {
    return res.json('Hello API')
}
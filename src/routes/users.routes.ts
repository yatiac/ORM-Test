import { Router } from "express";
import { allUsers, createUser } from "../controllers/user.controller";

const router = Router();

router.route('/').get(allUsers).post(createUser);

export default router;

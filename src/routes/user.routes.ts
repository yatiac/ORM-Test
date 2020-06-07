import { Router } from "express";

import * as db from "../controllers/users.controller";

const router = Router();

router.route("/").get(db.getAllUsers);
router.route('/:id').get(db.getUserAndPosts)

export default router;

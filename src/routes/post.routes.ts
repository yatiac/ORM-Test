import { Router } from "express";

import * as db from "../controllers/posts.controller";

const router = Router();

router.route("/").get(db.getAllPosts);

export default router;

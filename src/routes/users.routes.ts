import { Router } from "express";
import * as db from "../controllers/user.controller";

const router = Router();

router.route("/").get(db.allUsers).post(db.createUser);

router.route("/:id").get(db.findUser).delete(db.deleteUser).put(db.updateUser);

export default router;

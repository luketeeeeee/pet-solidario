import express from "express";
import { createUser } from "../controllers/users.controllers.js";

const router = express.Router();

router.route("/").post(createUser);

export default router;

import { Router } from "express";
import { createUser, validateUser } from "../controllers/authController.js";

const router = Router();

router.route("/login").post(validateUser);
router.route("/register").post(createUser);

export default router;

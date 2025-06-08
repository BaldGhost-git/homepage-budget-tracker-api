// @deno-types="npm:@types/express@5.0.3";
import express from "express";
import { login, register } from "./auth_handler.ts";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;

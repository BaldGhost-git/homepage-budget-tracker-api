import { Router } from "@oak/oak";
import { login, register } from "./auth_handler.ts";
const router = new Router();

router.post("/login", login);
router.post("/register", register);

export default router;

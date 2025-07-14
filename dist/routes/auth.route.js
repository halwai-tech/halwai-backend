import { Router } from "express";
import { RegisterSchema, LoginSchema } from "../utils/validators/auth.validation";
import { register, login } from "../controllers/auth.controller";
import { validate } from "../utils/middlewares/zodValidate.middleware";
const router = Router();
router.post("/register", validate(RegisterSchema), register);
router.post("/login", validate(LoginSchema), login);
export default router;

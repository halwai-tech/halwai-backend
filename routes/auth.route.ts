import {Router} from "express";

import {RegisterSchema, LoginSchema} from "../utils/validators/auth.validation.js";
import {register,login} from "../controllers/auth.controller.js";
import {validate} from "../utils/middlewares/zodValidate.middleware.js";

const router=Router();

router.post("/register",validate(RegisterSchema),register);

router.post("/login",validate(LoginSchema),login);

export default router;
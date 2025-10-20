import { Router } from "express";
import { getAllUsers, getUsersByRoles } from "../controllers/users.controller.js";
const usersRouter = Router();
usersRouter.get("/", getAllUsers);
usersRouter.get("/:role", getUsersByRoles);
export default usersRouter;

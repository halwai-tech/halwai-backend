import { Router } from "express";
import { getAllUsers, getUsersByRoles } from "../controllers/users.controller";
const usersRouter = Router();
usersRouter.get("/", getAllUsers);
usersRouter.get("/:roles", getUsersByRoles);
export default usersRouter;

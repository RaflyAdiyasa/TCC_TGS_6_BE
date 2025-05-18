import express from "express";
import * as UserController from "../controller/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const userRouter = express.Router();

userRouter.get("/token", refreshToken);
userRouter.post("/login", UserController.login);
// userRouter.get("/users", UserController.getUsers);
// userRouter.get("/users/:id", verifyToken, UserController.getUserById);
userRouter.post("/users", UserController.createUser);
// userRouter.put("/users/:id", verifyToken, UserController.updateUser);
userRouter.delete("/users", UserController.logout);

export default userRouter;
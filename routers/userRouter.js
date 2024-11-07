import express from "express";

import UsersController from "../Controllers/userController.js";

const UserRouter = express.Router();

UserRouter.get("/", UsersController.getList);
 UserRouter.get("/:id", UsersController.getById);
 UserRouter.post("/", UsersController.post);
 UserRouter.put("/:id", UsersController.update);
UserRouter.delete("/:id", UsersController.delete);

export default UserRouter;

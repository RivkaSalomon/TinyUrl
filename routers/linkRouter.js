import express from "express";

import LinkController from "../Controllers/linkController.js";

const LinkRouter = express.Router();

LinkRouter.get("/", LinkController.getList);
LinkRouter.get("/:id", LinkController.getById);
LinkRouter.post("/", LinkController.post);
LinkRouter.put("/:id", LinkController.update);
LinkRouter.delete("/:id", LinkController.delete);

export default LinkRouter;

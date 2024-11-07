import express from "express";
import SegmenationController from "../Controllers/Segmenation.js"


const SegmenationRouter = express.Router();
SegmenationRouter.get("/:id", SegmenationController.getById);

export default SegmenationRouter
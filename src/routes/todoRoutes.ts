import express from "express";
import * as todoController from "../controllers/todoController";
import { validateRequest } from "../middlewares/validateRequest";
import {
  createTodoSchema,
  updateTodoSchema,
} from "../validations/todoValidations";

const router = express.Router();

router.post("/create", todoController.create);
router.get("/getAll", todoController.getAll);
router.get("/getById/:id", todoController.getById);
router.put(
  "/update/:id",
  validateRequest(updateTodoSchema),
  todoController.update
);
router.delete("/delete/:id", todoController.remove);

export default router;

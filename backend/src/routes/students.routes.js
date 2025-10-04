import { Router } from "express";
import { createStudentController, deleteStudentByIdController, getStudentByIdController, getStudentsController, updateStudentByIdController } from "../controllers/students.controller.js";

export const studentsRouter = Router();

studentsRouter.get("/", getStudentsController);

studentsRouter.get("/:id", getStudentByIdController);

studentsRouter.post("/", createStudentController);

studentsRouter.put("/:id", updateStudentByIdController);

studentsRouter.delete("/:id", deleteStudentByIdController);
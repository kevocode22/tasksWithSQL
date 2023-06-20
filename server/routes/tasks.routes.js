import { Router } from "express";
import {
    createTask,
    deleteTask,
    getOneTask,
    getTasks,
    updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.post("/tasks", createTask);

router.get("/tasks/:id", getOneTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;

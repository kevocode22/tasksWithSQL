import express from "express";
import { PORT } from "./config/config.js";
import indexRouter from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use(indexRouter);
app.use(taskRoutes);
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);

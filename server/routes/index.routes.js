import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const [rows] = await pool.query("SELECT 1+10 as result");
  res.json(rows);
});

export default router;

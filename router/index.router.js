import express from "express";
import notesRouter from "./notes.router.js";
import userRouter from "./user.router.js";
const router = express.Router();
router.use("/notes", notesRouter);
router.use("/users", userRouter);

export default router;

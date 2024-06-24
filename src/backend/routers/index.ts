import express from "express";
import blogRouter from "./blogRouter";

const router = express.Router();

router.get("/", (_req, res) =>
  res.status(200).json({ message: "App APIs v1" }),
);

router.use("/", blogRouter);

export default router;

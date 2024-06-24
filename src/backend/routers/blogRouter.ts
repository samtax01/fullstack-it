import express from "express";
import { safeResponse } from "../helpers/exceptions";
import { BlogController } from "../controllers/BlogController";

const router = express.Router();
const blogController = new BlogController();

/**
 * GET /api/blog:
 */
router.get("/blog", async ({ query }, res) => {
  return safeResponse(res, () => blogController.get(query.id as string));
});

/**
 * GET /api/blogs:
 */
router.get("/blogs", ({ query }, res) => {
  return safeResponse(res, () => blogController.getAll(query.q as string));
});

/**
 * POST /api/blogs:
 */
router.post("/blogs", ({ body }, res) => {
  return safeResponse(res, () => blogController.create(body as string));
});

/**
 * DELETE /api/blog:
 */
router.delete("/blogs", ({ query }, res) => {
  return safeResponse(res, () => blogController.delete(query.id as string));
});

export default router;

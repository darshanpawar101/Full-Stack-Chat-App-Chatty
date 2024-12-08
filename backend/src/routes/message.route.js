import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import messageController from "../controllers/message.controller.js";

const router = express();

router.get("/users", protectRoute, messageController.getUsersForSidebar);

router.get("/:id", protectRoute, messageController.getMessages);

router.post("/send/:id", protectRoute, messageController.sendMessage);

export default router;

import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { CommentController } from "../modules/comment/controller";

const commentRoutes = Router();

commentRoutes.use(authMiddleware);
commentRoutes.get("/:task", new CommentController().getAllComments);
commentRoutes.post("/create/:taskId", new CommentController().createComment);
commentRoutes.delete("/delete/:taskId", new CommentController().deleteComment);

export { commentRoutes };

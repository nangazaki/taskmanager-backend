import { Router } from "express";
import { PriorityController } from "../modules/priority/controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const priorityRoutes = Router();

priorityRoutes.use(authMiddleware);
priorityRoutes.get("/", new PriorityController().GetAllPriorities);
priorityRoutes.delete("/:id", new PriorityController().deleteById);

export { priorityRoutes };

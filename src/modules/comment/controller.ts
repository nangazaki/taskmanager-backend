import { Request, Response } from "express";
import { prisma } from "../../lib/prisma/client";
import { AppError } from "../../errors/AppError";
import HttpStatusCodes from "../../constantes/HttpStatusCode";

export class CommentController {
  async createComment(req: Request, res: Response) {
    const { taskId } = req.params;
    const { text } = req.body;

    const taskAlreadyExists = await prisma.task.findFirst({
      where: {
        id: taskId,
        userId: req.user.id,
      },
    });

    if (!taskAlreadyExists) {
      throw new AppError(
        "Não foi possível encontrar a tarefa",
        HttpStatusCodes.NOT_FOUND
      );
    }

    const comment = await prisma.comment.create({
      data: {
        text: text,
        taskId: taskId,
        userId: req.user.id,
      },
    });

    res.status(HttpStatusCodes.OK);
  }

  async getAllComments(req: Request, res: Response) {
    const { taskId } = req.params;

    const comments = await prisma.comment.findMany({
      where: {
        taskId,
        userId: req.user.id,
      },
    });

    res.status(HttpStatusCodes.OK).json(comments);
  }

  async deleteComment(req: Request, res: Response) {
    const { taskId } = req.params;

    const commentAlreadyExists = await prisma.comment.findFirst({
      where: {
        id: taskId,
        userId: req.user.id,
      }
    })

    return res.status(HttpStatusCodes.OK)
  }

  async editCommentById(req: Request, res: Response) {}
}

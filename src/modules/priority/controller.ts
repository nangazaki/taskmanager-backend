import { Request, Response } from "express";
import { prisma } from "../../lib/prisma/client";
import { AppError } from "../../errors/AppError";
import { CreatePriorityDTO } from "./priority.dto";
import HttpStatusCodes from "../../constantes/HttpStatusCode";

export class PriorityController {
  async GetAllPriorities(req: Request, res: Response): Promise<Response> {
    const priorities = await prisma.priority.findMany();

    return res.json(priorities);
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const priority = await prisma.priority.delete({
      where: {
        id,
      },
    });

    return res.status(HttpStatusCodes.OK).json({
      status: "success",
      message: "Prioridade deletada com sucesso!",
    });
  }
}

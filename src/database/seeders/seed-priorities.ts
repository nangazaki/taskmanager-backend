import { prisma } from "../../lib/prisma/client";

const priorities = [{ name: "Alta" }, { name: "Média" }, { name: "Baixa" }];

async function seedPriorities() {
  try {
    for (const priority of priorities) {
      const priorityAlreadyExists = await prisma.priority.findFirst({
        where: {
          name: priority.name,
        },
      });

      if (!priorityAlreadyExists) {
        await prisma.priority.create({
          data: priority,
        });
      } else {
        console.log(`Prioridade '${priority.name}' já existe. Não adicionada.`);
      }
    }
  } catch (error) {
    console.error("Erro ao semear as prioridades:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export { seedPriorities };

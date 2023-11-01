"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/database/seeders/seed-priorities.ts
var seed_priorities_exports = {};
__export(seed_priorities_exports, {
  seedPriorities: () => seedPriorities
});
module.exports = __toCommonJS(seed_priorities_exports);

// src/lib/prisma/client.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/database/seeders/seed-priorities.ts
var priorities = [{ name: "Alta" }, { name: "M\xE9dia" }, { name: "Baixa" }];
async function seedPriorities() {
  try {
    for (const priority of priorities) {
      const priorityAlreadyExists = await prisma.priority.findFirst({
        where: {
          name: priority.name
        }
      });
      if (!priorityAlreadyExists) {
        await prisma.priority.create({
          data: priority
        });
      } else {
        console.log(`Prioridade '${priority.name}' j\xE1 existe. N\xE3o adicionada.`);
      }
    }
  } catch (error) {
    console.error("Erro ao semear as prioridades:", error);
  } finally {
    await prisma.$disconnect();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  seedPriorities
});

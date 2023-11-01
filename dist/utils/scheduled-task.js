"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/utils/scheduled-task.ts
var cron = __toESM(require("node-cron"));

// src/lib/prisma/client.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/utils/scheduled-task.ts
cron.schedule("0 0 * * *", async () => {
  const retentionDateLimit = /* @__PURE__ */ new Date();
  retentionDateLimit.setDate(retentionDateLimit.getDate() - 7);
  const tasksToDelete = await prisma.task.findMany({
    is_deleted: true,
    retention_period: {
      lt: retentionDateLimit
    }
  });
  if (!tasksToDelete) {
    return;
  }
  for (task of tasksToDelete) {
    await prisma.task.delete({
      where: {
        id: task.id
      }
    });
  }
  return;
});

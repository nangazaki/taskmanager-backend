"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/database/seeders/seed-admin.ts
var seed_admin_exports = {};
__export(seed_admin_exports, {
  seedAdmin: () => seedAdmin
});
module.exports = __toCommonJS(seed_admin_exports);
var bcrypt = __toESM(require("bcrypt"));

// src/lib/prisma/client.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/constantes/EnvVars.ts
var dotenv = __toESM(require("dotenv"));
dotenv.config();
var EnvVars_default = {
  Port: Number(process.env.PORT ?? 0),
  Bcrypt: {
    Salt: Number(process.env.ENCRYPT ?? 8)
  },
  Jwt: {
    Secret: process.env.JWT_SECRET ?? "",
    Exp: process.env.COOKIE_EXP ?? ""
    // exp at the same time as the cookie
  },
  AdminPassword: process.env.ADMIN_PASSWORD ?? ""
};

// src/database/seeders/seed-admin.ts
async function seedAdmin() {
  try {
    const adminAlreadyExists = await prisma.user.findFirst({
      where: {
        isSuperAdmin: true
      }
    });
    console.log(EnvVars_default.AdminPassword);
    if (!adminAlreadyExists) {
      const hashedPassword = await bcrypt.hash(
        EnvVars_default.AdminPassword,
        EnvVars_default.Bcrypt.Salt
      );
      await prisma.user.create({
        data: {
          firstName: "admin",
          lastName: "admin",
          username: "admin",
          email: "admin@taskmanager.com",
          isSuperAdmin: true,
          password: hashedPassword
        }
      });
    }
  } catch (error) {
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  seedAdmin
});

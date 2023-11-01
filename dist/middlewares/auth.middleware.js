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

// src/middlewares/auth.middleware.ts
var auth_middleware_exports = {};
__export(auth_middleware_exports, {
  authMiddleware: () => authMiddleware
});
module.exports = __toCommonJS(auth_middleware_exports);

// src/errors/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/middlewares/auth.middleware.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));

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

// src/middlewares/auth.middleware.ts
var authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new AppError("Usu\xE1rio n\xE3o autorizado.", 401);
  }
  const token = authorization.split(" ")[1];
  const { id } = import_jsonwebtoken.default.verify(token, EnvVars_default.Jwt.Secret);
  const user = await prisma.user.findUnique({
    where: { id }
  });
  if (!user) {
    throw new AppError("Usu\xE1rio n\xE3o encontrado ou token inv\xE1lido.", 404);
  }
  const { password, ...loggedUser } = user;
  req.user = loggedUser;
  next();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authMiddleware
});

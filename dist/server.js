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

// src/app.ts
var import_express_async_errors = require("express-async-errors");
var import_express9 = __toESM(require("express"));

// src/routes/index.ts
var import_express8 = require("express");

// src/routes/user.routes.ts
var import_express = require("express");

// src/modules/users/controller.ts
var import_bcrypt = __toESM(require("bcrypt"));

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

// src/lib/prisma/client.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/errors/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/constantes/HttpStatusCode.ts
var HttpStatusCodes = /* @__PURE__ */ ((HttpStatusCodes2) => {
  HttpStatusCodes2[HttpStatusCodes2["CONTINUE"] = 100] = "CONTINUE";
  HttpStatusCodes2[HttpStatusCodes2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  HttpStatusCodes2[HttpStatusCodes2["PROCESSING"] = 102] = "PROCESSING";
  HttpStatusCodes2[HttpStatusCodes2["OK"] = 200] = "OK";
  HttpStatusCodes2[HttpStatusCodes2["CREATED"] = 201] = "CREATED";
  HttpStatusCodes2[HttpStatusCodes2["ACCEPTED"] = 202] = "ACCEPTED";
  HttpStatusCodes2[HttpStatusCodes2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  HttpStatusCodes2[HttpStatusCodes2["NO_CONTENT"] = 204] = "NO_CONTENT";
  HttpStatusCodes2[HttpStatusCodes2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  HttpStatusCodes2[HttpStatusCodes2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  HttpStatusCodes2[HttpStatusCodes2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
  HttpStatusCodes2[HttpStatusCodes2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
  HttpStatusCodes2[HttpStatusCodes2["IM_USED"] = 226] = "IM_USED";
  HttpStatusCodes2[HttpStatusCodes2["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
  HttpStatusCodes2[HttpStatusCodes2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  HttpStatusCodes2[HttpStatusCodes2["FOUND"] = 302] = "FOUND";
  HttpStatusCodes2[HttpStatusCodes2["SEE_OTHER"] = 303] = "SEE_OTHER";
  HttpStatusCodes2[HttpStatusCodes2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  HttpStatusCodes2[HttpStatusCodes2["USE_PROXY"] = 305] = "USE_PROXY";
  HttpStatusCodes2[HttpStatusCodes2["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
  HttpStatusCodes2[HttpStatusCodes2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  HttpStatusCodes2[HttpStatusCodes2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  HttpStatusCodes2[HttpStatusCodes2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatusCodes2[HttpStatusCodes2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatusCodes2[HttpStatusCodes2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  HttpStatusCodes2[HttpStatusCodes2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatusCodes2[HttpStatusCodes2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatusCodes2[HttpStatusCodes2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HttpStatusCodes2[HttpStatusCodes2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  HttpStatusCodes2[HttpStatusCodes2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  HttpStatusCodes2[HttpStatusCodes2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HttpStatusCodes2[HttpStatusCodes2["CONFLICT"] = 409] = "CONFLICT";
  HttpStatusCodes2[HttpStatusCodes2["GONE"] = 410] = "GONE";
  HttpStatusCodes2[HttpStatusCodes2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  HttpStatusCodes2[HttpStatusCodes2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  HttpStatusCodes2[HttpStatusCodes2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  HttpStatusCodes2[HttpStatusCodes2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  HttpStatusCodes2[HttpStatusCodes2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  HttpStatusCodes2[HttpStatusCodes2["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
  HttpStatusCodes2[HttpStatusCodes2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  HttpStatusCodes2[HttpStatusCodes2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
  HttpStatusCodes2[HttpStatusCodes2["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
  HttpStatusCodes2[HttpStatusCodes2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  HttpStatusCodes2[HttpStatusCodes2["LOCKED"] = 423] = "LOCKED";
  HttpStatusCodes2[HttpStatusCodes2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  HttpStatusCodes2[HttpStatusCodes2["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
  HttpStatusCodes2[HttpStatusCodes2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  HttpStatusCodes2[HttpStatusCodes2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  HttpStatusCodes2[HttpStatusCodes2["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
  HttpStatusCodes2[HttpStatusCodes2["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
  HttpStatusCodes2[HttpStatusCodes2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HttpStatusCodes2[HttpStatusCodes2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  HttpStatusCodes2[HttpStatusCodes2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpStatusCodes2[HttpStatusCodes2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HttpStatusCodes2[HttpStatusCodes2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HttpStatusCodes2[HttpStatusCodes2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  HttpStatusCodes2[HttpStatusCodes2["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
  HttpStatusCodes2[HttpStatusCodes2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
  HttpStatusCodes2[HttpStatusCodes2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  HttpStatusCodes2[HttpStatusCodes2["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
  HttpStatusCodes2[HttpStatusCodes2["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  return HttpStatusCodes2;
})(HttpStatusCodes || {});
var HttpStatusCode_default = HttpStatusCodes;

// src/modules/users/controller.ts
var UserController = class {
  async create(req, res) {
    const { firstName, lastName, email, password, username } = req.body;
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (userAlreadyExists) {
      throw new AppError(
        "O e-mail j\xE1 est\xE1 a ser usado por outro usu\xE1rio",
        HttpStatusCode_default.CONFLICT
      );
    }
    const passwordEncrypted = await import_bcrypt.default.hash(password, EnvVars_default.Bcrypt.Salt);
    const userCreated = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        username,
        password: passwordEncrypted
      }
    });
    const { password: _, ...user } = userCreated;
    return res.status(201).json(user);
  }
  async getById(req, res) {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        username: true,
        emailVerifiedAt: true,
        teams: true
      }
    });
    if (!user) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado!", HttpStatusCode_default.NOT_FOUND);
    }
    return res.json(user);
  }
  async getAllUsers(req, res) {
    const { isSuperAdmin } = req.user;
    if (!isSuperAdmin) {
      throw new AppError(
        "Usu\xE1rio n\xE3o autorizado!",
        HttpStatusCode_default.UNAUTHORIZED
      );
    }
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        username: true,
        teams: true,
        password: false
      }
    });
    return res.json(users);
  }
  async editById(req, res) {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = await prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email
      }
    });
    if (!user) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado!", HttpStatusCode_default.NOT_FOUND);
    }
    return res.json({ message: "Edi\xE7\xE3o feita com sucesso!" });
  }
  async deleteById(req, res) {
    return res.json({
      message: "Implementando!"
    });
  }
};

// src/middlewares/auth.middleware.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
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

// src/routes/user.routes.ts
var userRoutes = (0, import_express.Router)();
userRoutes.post("/", new UserController().create);
userRoutes.use(authMiddleware);
userRoutes.get("/", new UserController().getAllUsers);
userRoutes.get("/:id", new UserController().getById);
userRoutes.put("/:id", new UserController().editById);
userRoutes.delete("/:id", new UserController().deleteById);

// src/routes/task.routes.ts
var import_express2 = require("express");

// src/modules/tasks/controller.ts
var TaskController = class {
  async create(req, res) {
    const { title, description, due_date, priorityId } = req.body;
    const taskAlreadyTaskCreated = await prisma.task.findMany({
      where: {
        title,
        userId: req.user.id,
        is_deleted: false
      }
    });
    if (taskAlreadyTaskCreated) {
      for (let task of taskAlreadyTaskCreated) {
        if (!task.completed) {
          console.log(task);
          throw new AppError(
            "O usu\xE1rio j\xE1 tem essa tarefa criada e incompleta!",
            HttpStatusCode_default.CONFLICT
          );
        }
      }
    }
    await prisma.task.create({
      data: {
        title,
        description,
        completed: false,
        due_date,
        priorityId,
        userId: req.user.id
      }
    });
    return res.status(HttpStatusCode_default.CREATED).json({ message: "Tarefa criada com sucesso!" });
  }
  async getUserTasks(req, res) {
    const id = req.user.id;
    const userTasks = await prisma.task.findMany({
      where: { is_deleted: false }
    });
    return res.status(HttpStatusCode_default.OK).json(userTasks);
  }
  async getTaskById(req, res) {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id, is_deleted: false }
    });
    if (!task) {
      throw new AppError("Tarefa n\xE3o encontrada.", 404);
    }
    return res.json(task);
  }
  async editTaskById(req, res) {
    const { id } = req.params;
    const { title, description, due_date, priority } = req.body;
    const taskToUpdate = await prisma.task.findUnique({
      where: { id }
    });
    if (!taskToUpdate) {
      throw new AppError("Tarefa n\xE3o encontrada", HttpStatusCode_default.NOT_FOUND);
    }
    await prisma.task.update({
      where: { id },
      data: { title, description, due_date, priority }
    });
    return res.status(HttpStatusCode_default.OK).json();
  }
  async UpdateStateTaskById(req, res) {
    const { id } = req.params;
    const { completed } = req.body;
    await prisma.task.update({
      where: { id, userId: req.user.id },
      data: { completed }
    });
    return res.status(HttpStatusCode_default.OK).json();
  }
  async deleteTaskById(req, res) {
    const { id } = req.params;
    const taskToUpdate = await prisma.task.findUnique({
      where: { id, userId: req.user.id, is_deleted: false }
    });
    if (!taskToUpdate) {
      throw new AppError("Tarefa n\xE3o encontrada", HttpStatusCode_default.NOT_FOUND);
    }
    await prisma.task.update({
      where: { id, userId: req.user.id },
      data: {
        is_deleted: true,
        deleted_at: /* @__PURE__ */ new Date()
      }
    });
    return res.status(HttpStatusCode_default.OK).json();
  }
  async searchByTitle(req, res) {
    const { titulo } = req.query;
    const title = titulo;
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.id,
        is_deleted: false,
        title: {
          contains: title
        }
      }
    });
    if (tasks.length === 0) {
      return res.status(HttpStatusCode_default.NOT_FOUND).json({ status: 404, message: "Nenhuma tarefa encontrada!" });
    }
    return res.status(HttpStatusCode_default.OK).json(tasks);
  }
};

// src/routes/task.routes.ts
var taskRoutes = (0, import_express2.Router)();
taskRoutes.use(authMiddleware);
taskRoutes.get("/", new TaskController().getUserTasks);
taskRoutes.get("/search", new TaskController().searchByTitle);
taskRoutes.get("/:id", new TaskController().getTaskById);
taskRoutes.post("/", new TaskController().create);
taskRoutes.patch("/:id", new TaskController().UpdateStateTaskById);
taskRoutes.patch("/:id", new TaskController().editTaskById);
taskRoutes.delete("/:id", new TaskController().deleteTaskById);

// src/routes/priority.routes.ts
var import_express3 = require("express");

// src/modules/priority/controller.ts
var PriorityController = class {
  async GetAllPriorities(req, res) {
    const priorities = await prisma.priority.findMany();
    return res.json(priorities);
  }
  async deleteById(req, res) {
    const { id } = req.params;
    const priority = await prisma.priority.delete({
      where: {
        id
      }
    });
    return res.status(HttpStatusCode_default.OK).json({
      status: "success",
      message: "Prioridade deletada com sucesso!"
    });
  }
};

// src/routes/priority.routes.ts
var priorityRoutes = (0, import_express3.Router)();
priorityRoutes.use(authMiddleware);
priorityRoutes.get("/", new PriorityController().GetAllPriorities);
priorityRoutes.delete("/:id", new PriorityController().deleteById);

// src/routes/auth.routes.ts
var import_express4 = require("express");

// src/modules/auth/controller.ts
var import_bcrypt2 = __toESM(require("bcrypt"));
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var AuthController = class {
  async login(req, res) {
    const { email, password } = req.body;
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!userAlreadyExists) {
      throw new AppError("Usuario n\xE3o encontrado.", HttpStatusCode_default.NOT_FOUND);
    }
    const isMatched = await import_bcrypt2.default.compare(
      password,
      userAlreadyExists.password
    );
    if (!isMatched) {
      throw new AppError("Senha inv\xE1lida.", HttpStatusCode_default.UNAUTHORIZED);
    }
    const token = import_jsonwebtoken2.default.sign({ id: userAlreadyExists.id }, EnvVars_default.Jwt.Secret, {
      expiresIn: EnvVars_default.Jwt.Exp
    });
    const { password: _, ...user } = userAlreadyExists;
    return res.json({
      user,
      token
    });
  }
  async register(req, res) {
    const { firstName, lastName, email, password, username } = req.body;
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (userAlreadyExists) {
      throw new AppError(
        "O e-mail j\xE1 est\xE1 a ser usado por outro usu\xE1rio",
        HttpStatusCode_default.CONFLICT
      );
    }
    const passwordEncrypted = await import_bcrypt2.default.hash(password, EnvVars_default.Bcrypt.Salt);
    const userCreated = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        username,
        password: passwordEncrypted
      }
    });
    const { password: _, ...user } = userCreated;
    return res.status(HttpStatusCode_default.CREATED).json(user);
  }
  async getProfile(req, res) {
    return res.json(req.user);
  }
};

// src/routes/auth.routes.ts
var authRoutes = (0, import_express4.Router)();
authRoutes.post("/login", new AuthController().login);
authRoutes.post("/register", new AuthController().register);
authRoutes.use(authMiddleware);
authRoutes.get("/profile", new AuthController().getProfile);

// src/routes/statistic.routes.ts
var import_express5 = require("express");

// src/modules/statistic/controller.ts
var StatisticController = class {
  async mostCommomPriorities(req, res) {
    const { limit } = req.params;
    const mostCommomPriorities = await prisma.$queryRaw`
      SELECT
        priority,
        COUNT(*) AS count
      FROM
        task
      WHERE
        userId = ${req.user.id}
      GROUP BY
        priority
      ORDER BY
        count DESC
      LIMIT
        ${Number(limit)};
    `;
    return res.status(HttpStatusCode_default.CREATED).json(mostCommomPriorities);
  }
};

// src/routes/statistic.routes.ts
var statisticRoutes = (0, import_express5.Router)();
statisticRoutes.get(
  "/most-commom-priorities/:limit",
  new StatisticController().mostCommomPriorities
);

// src/routes/trash.routes.ts
var import_express6 = require("express");

// src/modules/trash/controller.ts
var TrashController = class {
  async getAllTasks(req, res) {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.id,
        is_deleted: true
      }
    });
    return res.status(HttpStatusCode_default.OK).json(tasks);
  }
  async restoreTask(req, res) {
    const { id } = req.params;
    const { restore } = req.body;
    const taskAlreadyExists = await prisma.task.findUnique({
      where: {
        userId: req.user.id,
        is_deleted: true,
        id
      }
    });
    if (!taskAlreadyExists) {
      throw new AppError(
        "A Tarefa n\xE3o foi encontrada.",
        HttpStatusCode_default.NOT_FOUND
      );
    }
    await prisma.task.update({
      where: {
        userId: req.user.id,
        is_deleted: true,
        id
      },
      data: {
        is_deleted: restore
      }
    });
    return res.status(HttpStatusCode_default.OK).json();
  }
  async deleteTaskPermanently(req, res) {
    const { id } = req.params;
    await prisma.task.delete({
      where: {
        id,
        userId: req.user.id,
        is_deleted: true
      }
    });
    return res.status(HttpStatusCode_default.OK).json();
  }
};

// src/routes/trash.routes.ts
var trashRoutes = (0, import_express6.Router)();
trashRoutes.use(authMiddleware);
trashRoutes.get("/", new TrashController().getAllTasks);
trashRoutes.post("/:id", new TrashController().restoreTask);
trashRoutes.post("/delete/:id", new TrashController().deleteTaskPermanently);

// src/routes/comment.routes.ts
var import_express7 = require("express");

// src/modules/comment/controller.ts
var CommentController = class {
  async createComment(req, res) {
    const { taskId } = req.params;
    const { text } = req.body;
    const taskAlreadyExists = await prisma.task.findFirst({
      where: {
        id: taskId,
        userId: req.user.id
      }
    });
    if (!taskAlreadyExists) {
      throw new AppError(
        "N\xE3o foi poss\xEDvel encontrar a tarefa",
        HttpStatusCode_default.NOT_FOUND
      );
    }
    const comment = await prisma.comment.create({
      data: {
        text,
        taskId,
        userId: req.user.id
      }
    });
    res.status(HttpStatusCode_default.OK);
  }
  async getAllComments(req, res) {
    const { taskId } = req.params;
    const comments = await prisma.comment.findMany({
      where: {
        taskId,
        userId: req.user.id
      }
    });
    res.status(HttpStatusCode_default.OK).json(comments);
  }
  async deleteComment(req, res) {
    const { taskId } = req.params;
    const commentAlreadyExists = await prisma.comment.findFirst({
      where: {
        id: taskId,
        userId: req.user.id
      }
    });
    return res.status(HttpStatusCode_default.OK);
  }
  async editCommentById(req, res) {
  }
};

// src/routes/comment.routes.ts
var commentRoutes = (0, import_express7.Router)();
commentRoutes.use(authMiddleware);
commentRoutes.get("/:task", new CommentController().getAllComments);
commentRoutes.post("/create/:taskId", new CommentController().createComment);
commentRoutes.delete("/delete/:taskId", new CommentController().deleteComment);

// src/routes/index.ts
var routes = (0, import_express8.Router)();
routes.use("/api/auth", authRoutes);
routes.use("/api/users", userRoutes);
routes.use("/api/tasks", taskRoutes);
routes.use("/api/comments", commentRoutes);
routes.use("/api/priorities", priorityRoutes);
routes.use("api/statistics", statisticRoutes);
routes.use("/api/trash", trashRoutes);

// src/app.ts
var app = (0, import_express9.default)();
app.use(import_express9.default.json());
app.use(routes);
app.use(
  (err, request, response, next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Ocorreu um erro interno no servidor - ${err.message}`
    });
  }
);

// src/server.ts
app.listen(
  EnvVars_default.Port,
  () => console.log(`Server is running in port - ${EnvVars_default.Port}. \u{1F601}`)
);

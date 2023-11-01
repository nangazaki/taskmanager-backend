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

// src/routes/statistic.routes.ts
var statistic_routes_exports = {};
__export(statistic_routes_exports, {
  statisticRoutes: () => statisticRoutes
});
module.exports = __toCommonJS(statistic_routes_exports);
var import_express = require("express");

// src/lib/prisma/client.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
var statisticRoutes = (0, import_express.Router)();
statisticRoutes.get(
  "/most-commom-priorities/:limit",
  new StatisticController().mostCommomPriorities
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  statisticRoutes
});

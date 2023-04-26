import { GenericRouteHandler } from "@server/types";
import { RouteHandler } from "fastify";
import { AppError } from "@infrastructure/errors/app-error/app-error";
import { GetCsrfTokenReplyType } from "@server/feature/security/get-csrf-token/schema";

export type GetPathsHandler = GenericRouteHandler<never, GetCsrfTokenReplyType | AppError>;

export const getCsrfToken: RouteHandler<GetPathsHandler> = async (request, reply) => {
	const token = await reply.generateCsrf();
	reply.setCookie("_csrf", token, { path: "/", sameSite: "lax", httpOnly: true }).status(200).send({ token });
};

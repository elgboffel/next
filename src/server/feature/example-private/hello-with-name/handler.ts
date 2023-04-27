import { GenericRouteHandler } from "@server/types";
import { AppError } from "@infrastructure/errors/app-error/app-error";
import { RouteHandler } from "fastify";
import { HelloWithNameQueryType, HelloWithNameReplyType } from "@server/feature/example-private/hello-with-name/schema";

export type HelloWithNameHandler = GenericRouteHandler<HelloWithNameQueryType, HelloWithNameReplyType | AppError>;

export const helloWithName: RouteHandler<HelloWithNameHandler> = async (request, reply) => {
	const { name = "" } = request.params;
	reply.status(200).send({ hello: name });
};

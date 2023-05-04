import { GenericRouteHandler } from "@server/types";
import { AppError } from "@infrastructure/errors/app-error/app-error";
import { RouteHandler } from "fastify";
import { HelloWithNameQueryType, HelloWithNameReplyType } from "@server/feature/example-public/hello-with-name/schema";

export type HelloWithNameHandler = GenericRouteHandler<HelloWithNameQueryType, HelloWithNameReplyType | AppError>;

export const helloWithName: RouteHandler<HelloWithNameHandler> = async (request, reply) => {
	const { name = "" } = request.params;

	/* Slow function for performance test */
	const payload = (): { date: number; id: string } => {
		let chars = "";

		let n = 20;
		const date = Date.now();
		const radix = 36;
		n *= n * 20;
		while (n--) {
			const num = date + n;
			chars += num.toString(radix).toUpperCase();
		}
		const id = chars.slice(-20);
		return { date, id };
	};
	reply.status(200).send({ hello: name, payload: payload() });
};

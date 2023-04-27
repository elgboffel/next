import { FastifyInstance } from "fastify";
import { helloWithName } from "@server/feature/example-private/hello-with-name/handler";
import {
	HelloWithNameQuerySchema,
	HelloWithNameReplySchema,
} from "@server/feature/example-private/hello-with-name/schema";

export const examplePrivateRoute = async (server: FastifyInstance) => {
	server.register(
		async (server: FastifyInstance) => {
			server.addSchema({ $id: "HelloWithNameReplySchema", ...HelloWithNameReplySchema });

			server.get(
				"/:name",
				{ schema: { params: HelloWithNameQuerySchema, response: { 200: { $ref: "HelloWithNameReplySchema#" } } } },
				helloWithName
			);
		},
		{
			prefix: "/private/hello",
		}
	);
};

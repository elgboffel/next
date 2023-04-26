import { FastifyInstance } from "fastify";
import { helloWithName } from "@server/feature/example/hello-with-name/handler";
import { HelloWithNameQuerySchema, HelloWithNameReplySchema } from "@server/feature/example/hello-with-name/schema";

export const exampleRoute = async (server: FastifyInstance) => {
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
			prefix: "/hello",
		}
	);
};

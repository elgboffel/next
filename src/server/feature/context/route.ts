import { FastifyInstance } from "fastify";
import { getContext } from "@server/feature/context/service";
import { GetContextQuerySchema, GetContextReplySchema } from "@server/feature/context/schema";

export async function contextRoute(server: FastifyInstance) {
	server.addSchema({ $id: "GetContextResponseSchema", ...GetContextReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.get(
				"/:id",
				{ schema: { params: GetContextQuerySchema, response: { 200: { $ref: "GetContextResponseSchema#" } } } },
				getContext
			);
		},
		{
			prefix: "/context",
		}
	);
}

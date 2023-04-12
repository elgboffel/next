import { FastifyInstance } from "fastify";
import { getPages } from "@server/feature/pages/service";
import { GetPagesQuerySchema, GetPagesReplySchema } from "@server/feature/pages/schema";

export async function pagesRoute(server: FastifyInstance) {
	server.addSchema({ $id: "GetPagesResponseSchema", ...GetPagesReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.get(
				"/:areaId",
				{ schema: { params: GetPagesQuerySchema, response: { 200: { $ref: "GetPagesResponseSchema#" } } } },
				getPages
			);
		},
		{
			prefix: "/pages",
		}
	);
}

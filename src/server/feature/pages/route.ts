import { FastifyInstance } from "fastify";
import { getPages } from "@server/feature/pages/service";
import { GetPagesPathsReplySchema, GetPagesQuerySchema, GetPagesReplySchema } from "@server/feature/pages/schema";

export async function pagesRoute(server: FastifyInstance) {
	server.addSchema({ $id: "GetPagesResponseSchema", ...GetPagesReplySchema });
	server.addSchema({ $id: "GetPagesPathsResponseSchema", ...GetPagesPathsReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.get(
				"/:areaId",
				{ schema: { params: GetPagesQuerySchema, response: { 200: { $ref: "GetPagesResponseSchema#" } } } },
				getPages
			);

			server.get(
				"/paths/:areaId",
				{ schema: { params: GetPagesQuerySchema, response: { 200: { $ref: "GetPagesPathsResponseSchema#" } } } },
				getPages
			);
		},
		{
			prefix: "/pages",
		}
	);
}

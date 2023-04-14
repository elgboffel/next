import { FastifyInstance } from "fastify";
import { getPage, getPages } from "@server/feature/pages/service";
import {
	GetPageQuerySchema,
	GetPageReplySchema,
	GetPagesPathsReplySchema,
	GetPagesQuerySchema,
	GetPagesReplySchema,
} from "@server/feature/pages/schema";

export async function pagesRoute(server: FastifyInstance) {
	server.addSchema({ $id: "GetPagesResponseSchema", ...GetPagesReplySchema });
	server.addSchema({ $id: "GetPagesPathsResponseSchema", ...GetPagesPathsReplySchema });
	server.addSchema({ $id: "GetPageResponseSchema", ...GetPageReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.get(
				"/area/:areaId",
				{ schema: { params: GetPagesQuerySchema, response: { 200: { $ref: "GetPagesResponseSchema#" } } } },
				getPages
			);

			server.get(
				"/:pageId",
				// { schema: { params: GetPageQuerySchema, response: { 200: { $ref: "GetPageResponseSchema#" } } } },
				{ schema: { params: GetPageQuerySchema } },
				getPage
			);

			//Duplicate so far, might need be needed
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

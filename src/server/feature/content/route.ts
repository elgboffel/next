import { FastifyInstance } from "fastify";
import { GetPageBySlugQuerySchema } from "@server/feature/content/get-page-by-slug/schema";
import { getPageBySlug } from "@server/feature/content/get-page-by-slug/handler";

export const exampleRoute = async (server: FastifyInstance) => {
	server.register(
		async (server: FastifyInstance) => {
			server.get("/page/:slug", { schema: { params: GetPageBySlugQuerySchema } }, getPageBySlug);
		},
		{
			prefix: "/content",
		}
	);
};

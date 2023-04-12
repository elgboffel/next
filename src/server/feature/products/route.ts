import { FastifyInstance } from "fastify";
import { GetProductsQuerySchema, GetProductsReplySchema } from "@server/feature/products/schema";
import { getProducts } from "@server/feature/products/service";

export async function productsRoute(server: FastifyInstance) {
	server.addSchema({ $id: "GetProductsResponseSchema", ...GetProductsReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.get(
				"/:repositoryName",
				{ schema: { params: GetProductsQuerySchema, response: { 200: { $ref: "GetProductsResponseSchema#" } } } },
				getProducts
			);
		},
		{
			prefix: "/products",
		}
	);
}

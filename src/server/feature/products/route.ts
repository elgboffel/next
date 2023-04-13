import { FastifyInstance } from "fastify";
import {
	GetProductQuerySchema,
	GetProductReplySchema,
	GetProductsQuerySchema,
	GetProductsReplySchema,
	GetProductVariantQuerySchema,
	GetProductVariantReplySchema,
} from "@server/feature/products/schema";
import { getProduct, getProducts, getProductVariant } from "@server/feature/products/service";

export async function productsRoute(server: FastifyInstance) {
	server.addSchema({ $id: "GetProductsResponseSchema", ...GetProductsReplySchema });
	server.addSchema({ $id: "GetProductResponseSchema", ...GetProductReplySchema });
	server.addSchema({ $id: "GetProductVariantResponseSchema", ...GetProductVariantReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.get(
				"/collection/:repositoryName",
				{ schema: { params: GetProductsQuerySchema, response: { 200: { $ref: "GetProductsResponseSchema#" } } } },
				getProducts
			);

			server.get("/:id", { schema: { params: GetProductQuerySchema } }, getProduct);

			server.get("/:productId/:variantId", { schema: { params: GetProductVariantQuerySchema } }, getProductVariant);
		},
		{
			prefix: "/products",
		}
	);
}

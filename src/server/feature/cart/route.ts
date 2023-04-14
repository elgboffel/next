import { FastifyInstance } from "fastify";
import { GetPagesQuerySchema, GetPagesReplySchema } from "@server/feature/pages/schema";
import { createCart } from "@server/feature/cart/service";

export async function cartRoute(server: FastifyInstance) {
	server.addSchema({ $id: "CreateCartResponseSchema", ...GetPagesReplySchema });

	server.register(
		async (server: FastifyInstance) => {
			server.post(
				"/create",
				{ schema: { params: GetPagesQuerySchema, response: { 200: { $ref: "CreateCartResponseSchema#" } } } },
				createCart
			);
		},
		{
			prefix: "/cart",
		}
	);
}

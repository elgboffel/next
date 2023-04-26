import { FastifyInstance } from "fastify";
import { GetCsrfTokenReplySchema } from "@server/feature/security/get-csrf-token/schema";
import { getCsrfToken } from "@server/feature/security/get-csrf-token/handler";

export const securityRoute = async (server: FastifyInstance) => {
	server.register(
		async (server: FastifyInstance) => {
			server.addSchema({ $id: "GetCsrfTokenReplySchema", ...GetCsrfTokenReplySchema });

			server.get(
				"/get-csrf-token",
				{ schema: { response: { 200: { $ref: "GetCsrfTokenReplySchema#" } } } },
				getCsrfToken
			);
		},
		{
			prefix: "/security",
		}
	);
};

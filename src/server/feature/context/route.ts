import { FastifyInstance } from "fastify";
import { getContext } from "@server/feature/context/service";
import { getContextSchema } from "@server/feature/context/schema";

export async function contextRoute(server: FastifyInstance) {
	server.register(
		async (server: FastifyInstance) => {
			server.get("/:id", { schema: getContextSchema }, getContext);
		},
		{
			prefix: "/context",
		}
	);
}

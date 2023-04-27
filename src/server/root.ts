import { FastifyInstance } from "fastify";
import { exampleRoute } from "@server/feature/example/route";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerOptions } from "@server/config/swagger-options";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import bearerAuthPlugin from "@fastify/bearer-auth";
import { env } from "@infrastructure/env/server.mjs";
import helmet from "@fastify/helmet";

const BEARER_AUTH_KEYS = new Set([env.NEXT_PUBLIC_FASTIFY_API_READ_ONLY_TOKEN, env.FASTIFY_API_WRITE_TOKEN]);
export default async function (server: FastifyInstance) {
	server.withTypeProvider<TypeBoxTypeProvider>();

	server.register(helmet, { global: true });
	server.register(bearerAuthPlugin, { keys: BEARER_AUTH_KEYS });

	await server.register(swagger);
	await server.register(swaggerUI, swaggerOptions);

	server.register(exampleRoute);
}

import { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerOptions } from "@server/config/swagger-options";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import bearerAuthPlugin from "@fastify/bearer-auth";
import { env } from "@infrastructure/env/server.mjs";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import cors from "@fastify/cors";
import sensible from "@fastify/sensible";
import { examplePublicRoute } from "@server/feature/example-public/route";
import { examplePrivateRoute } from "@server/feature/example-private/route";

const BEARER_AUTH_READ_ONLY_KEYS = new Set([env.NEXT_PUBLIC_FASTIFY_API_READ_ONLY_TOKEN]);
const BEARER_AUTH_WRITE_KEYS = new Set([env.FASTIFY_API_WRITE_TOKEN]);

const ALLOW_ORIGINS = "//localhost:3000, //localhost:1337";

export default async function (server: FastifyInstance) {
	server.withTypeProvider<TypeBoxTypeProvider>();

	/* Register defaults for Fastify */
	server.register(sensible);

	/* Register default headers */
	server.register(helmet, { global: true });

	await server.register(cors, {
		origin: ALLOW_ORIGINS,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		credentials: true, // Allow cookies to be sent with CORS requests
	});

	await server.register(rateLimit, {
		max: 100,
		timeWindow: "1 minute",
	});

	await server.register(swagger);
	await server.register(swaggerUI, swaggerOptions);

	/* Register public routes */
	const publicRoutes = async (publicServer: FastifyInstance) => {
		publicServer.register(bearerAuthPlugin, { keys: BEARER_AUTH_READ_ONLY_KEYS });

		publicServer.register(examplePublicRoute);
	};

	/* Register private routes */
	const privateRoutes = async (privateServer: FastifyInstance) => {
		privateServer.register(bearerAuthPlugin, { keys: BEARER_AUTH_WRITE_KEYS });

		privateServer.register(examplePrivateRoute);
	};

	server.register(publicRoutes);
	server.register(privateRoutes);
}

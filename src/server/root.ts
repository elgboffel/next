import { FastifyInstance } from "fastify";
import { exampleRoute } from "@server/feature/example/route";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerOptions } from "@server/config/swagger-options";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

export default async function (server: FastifyInstance) {
	server.withTypeProvider<TypeBoxTypeProvider>();

	await server.register(swagger);
	await server.register(swaggerUI, swaggerOptions);

	server.register(exampleRoute);
}

import { FastifyInstance } from "fastify";
import { exampleRoute } from "@server/feature/example/route";

export default async function (instance: FastifyInstance) {
	instance.register(exampleRoute);
}

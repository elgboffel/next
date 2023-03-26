import { FastifyInstance } from "fastify";
import { example } from "@server/feature/example/example";

export default async function (instance: FastifyInstance) {
	instance.register(example);
}

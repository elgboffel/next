import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function handleCsrfRouting(server: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
	if (request.raw.url?.startsWith("/api/serverless/security/get-csrf-token")) return;

	return server.csrfProtection(request, reply, () => "");
}

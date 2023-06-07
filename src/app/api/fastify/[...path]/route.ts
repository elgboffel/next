import * as dotenv from "dotenv";
dotenv.config();

import Fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { env } from "@infrastructure/env/server.mjs";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify({
	logger: env.NODE_ENV === "development",
});

// Prefix everything with current path
server.register(import("@server/root"), {
	prefix: "/api/serverless",
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
	await server.ready();
	server.server.emit("request", req, res);
}

export { handler as GET, handler as POST };

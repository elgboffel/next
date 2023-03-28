import * as dotenv from "dotenv";
dotenv.config();

import Fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify({
	logger: true,
});

// Prefix everything with current path
server.register(import("@server/root"), {
	prefix: "/api/serverless",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await server.ready();
	server.server.emit("request", req, res);
};

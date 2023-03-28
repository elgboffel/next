import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import { NextApiRequest, NextApiResponse } from "next";

const app = Fastify({
	logger: true,
});

// Prefix everything with current path
app.register(import("@server/root"), {
	prefix: "/api/serverless",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await app.ready();
	app.server.emit("request", req, res);
};

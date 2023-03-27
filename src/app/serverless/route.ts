import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// Instantiate Fastify with some config
const app = Fastify({
	logger: true,
});

// Register your application as a normal plugin.
// Prefix everything with current path
app.register(import("@server/root"), {
	prefix: "/serverless",
});

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	return NextResponse.json({ hello: "world" });
	await app.ready();
	app.server.emit("request", req, res);
}

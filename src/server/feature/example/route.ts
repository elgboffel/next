import { FastifyInstance, FastifyRequest } from "fastify";

interface QueryString {
	name: string;
}

interface Params {
	name: string;
}

interface CustomRouteGenericParam {
	Params: Params;
}

interface CustomRouteGenericQuery {
	Querystring: QueryString;
}

export const exampleRoute = async (server: FastifyInstance) => {
	server.get("/", async (req, res) => {
		res.status(200).send({
			hello: "World",
		});
	});

	server.register(
		async (server: FastifyInstance) => {
			server.get("/", async (req: FastifyRequest<CustomRouteGenericQuery>, res) => {
				const { name = "" } = req.query;
				res.status(200).send(`Hello ${name}`);
			});

			server.get("/:name", async (req: FastifyRequest<CustomRouteGenericParam>, res) => {
				const { name = "" } = req.params;
				res.status(200).send({ hello: name });
			});
		},
		{
			prefix: "/hello",
		}
	);
};

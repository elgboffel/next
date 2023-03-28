import { FastifyInstance, RequestGenericInterface } from "fastify";
import { HelloQuerySchema, HelloQueryType, HelloReplySchema, HelloReplyType } from "@server/feature/example/schema";

type GetHello = RequestGenericInterface & {
	Reply: HelloReplyType;
};

type GetHelloQuerystring = RequestGenericInterface & {
	Querystring: HelloQueryType;
};

type GetHelloParams = RequestGenericInterface & {
	Params: HelloQueryType;
	Reply: HelloReplyType;
};

export const exampleRoute = async (server: FastifyInstance) => {
	server.get<GetHello>("/", { schema: { response: { 200: HelloReplySchema } } }, async (req, res) => {
		res.status(200).send({
			hello: "World",
		});
	});

	server.register(
		async (server: FastifyInstance) => {
			server.get<GetHelloQuerystring>(
				"/",
				{ schema: { querystring: HelloQuerySchema, response: { 200: HelloReplySchema } } },
				async (req, res) => {
					const { name = "" } = req.query;
					res.status(200).send(`Hello ${name}`);
				}
			);

			server.get<GetHelloParams>(
				"/:name",
				{ schema: { params: HelloQuerySchema, response: { 200: HelloReplySchema } } },
				async (req, res) => {
					const { name = "" } = req.params;
					res.status(200).send({ hello: name });
				}
			);
		},
		{
			prefix: "/hello",
		}
	);
};

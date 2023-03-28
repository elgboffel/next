import { FastifyInstance, RequestGenericInterface } from "fastify";
import { HelloQuerySchema, HelloQueryType, HelloReplySchema, HelloReplyType } from "@server/feature/example/schema";

type GetHelloParams = RequestGenericInterface & {
	Params: HelloQueryType;
	Reply: HelloReplyType;
};

export const exampleRoute = async (server: FastifyInstance) => {
	server.register(
		async (server: FastifyInstance) => {
			server.addSchema({ $id: "HelloReplySchema", ...HelloReplySchema });

			server.get<GetHelloParams>(
				"/:name",
				{ schema: { params: HelloQuerySchema, response: { 200: { $ref: "HelloReplySchema#" } } } },
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

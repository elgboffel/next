import { RouteHandler } from "fastify";
import { GenericParams } from "@server/types";

export type GetContextHandlerParams = {
	id: string;
};

export const getProductCollection: RouteHandler<GenericParams<GetContextHandlerParams>> = async (request, reply) => {
	const id = request.params.id;

	const area = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/areas/${id}`).then((res) =>
		res.json()
	);

	reply.send(area);
};

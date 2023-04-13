import { RouteHandler } from "fastify";
import { GetContextQueryType } from "@server/feature/context/schema";
import { AreaInfoViewModel } from "@infrastructure/types/generated/commerce/models/AreaInfoViewModel";
import { GenericRouteHandler } from "@server/types";

export type GetContextHandler = GenericRouteHandler<GetContextQueryType, AreaInfoViewModel>;

export const getContext: RouteHandler<GetContextHandler> = async (request, reply) => {
	const id = request.params.id;

	const res: AreaInfoViewModel = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/areas/${id}`).then(
		(res) => res.json()
	);

	reply.send(res);
};

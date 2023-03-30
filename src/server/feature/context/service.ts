import { RouteHandler } from "fastify";
import { GetContextQueryType } from "@server/feature/context/schema";
import { AreaInfoViewModel } from "@infrastructure/types/generated/commerce/models/AreaInfoViewModel";

export type GetContextHandler = {
	Params: GetContextQueryType;
	Reply: AreaInfoViewModel;
};

export const getContext: RouteHandler<GetContextHandler> = async (request, reply) => {
	const id = request.params.id;

	const area: AreaInfoViewModel = await fetch(
		`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/areas/${id}`
	).then((res) => res.json());

	reply.send(area);
};

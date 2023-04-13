import { RouteHandler } from "fastify";
import { GenericRouteHandler } from "@server/types";
import { GetPagesQueryType } from "@server/feature/pages/schema";
import { PageInfoViewModel } from "@infrastructure/types/generated/commerce/models/PageInfoViewModel";

export type GetPagesHandler = GenericRouteHandler<GetPagesQueryType, PageInfoViewModel[]>;

export const getPages: RouteHandler<GetPagesHandler> = async (request, reply) => {
	const repositoryName = request.params.areaId;

	const res = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/pages?areaId=${repositoryName}`).then(
		(res) => res.json()
	);

	reply.send(res);
};

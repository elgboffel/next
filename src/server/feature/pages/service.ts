import { RouteHandler } from "fastify";
import { GenericRouteHandler } from "@server/types";
import { GetPageQueryType, GetPagesQueryType } from "@server/feature/pages/schema";
import { PageInfoViewModel } from "@infrastructure/types/generated/commerce/models/PageInfoViewModel";

export type GetPagesHandler = GenericRouteHandler<GetPagesQueryType, PageInfoViewModel[]>;

export const getPages: RouteHandler<GetPagesHandler> = async (request, reply) => {
	const areaId = request.params.areaId;

	const res = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/pages?areaId=${areaId}`).then((res) =>
		res.json()
	);

	reply.send(res);
};

export type GetPageHandler = GenericRouteHandler<GetPageQueryType, PageInfoViewModel>;

export const getPage: RouteHandler<GetPageHandler> = async (request, reply) => {
	const pageId = request.params.pageId;

	const res = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/pages/${pageId}`).then((res) =>
		res.json()
	);

	reply.send(res);
};

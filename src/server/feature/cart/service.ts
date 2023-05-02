import { RouteHandler } from "fastify";
import { GenericRouteHandler } from "@server/types";
import { CreateCartRequestType } from "@server/feature/cart/schema";
import { OrderViewModel } from "@infrastructure/types/generated/commerce/models/OrderViewModel";

export type CreateCartHandler = GenericRouteHandler<CreateCartRequestType, OrderViewModel>;

export const createCart: RouteHandler<CreateCartHandler> = async (request, reply) => {
	//TODO: still needs implementation
	const areaId = request.params.areaId;

	const res = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/content/pages?areaId=${areaId}`).then((res) =>
		res.json()
	);

	reply.send(res);
};

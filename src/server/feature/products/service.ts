import { RouteHandler } from "fastify";
import { GetProductsQueryType } from "@server/feature/products/schema";
import { ProductListViewModel } from "@infrastructure/types/generated/commerce/models/ProductListViewModel";
import { GenericRouteHandler } from "@server/types";

export type GetProductsHandler = GenericRouteHandler<GetProductsQueryType, ProductListViewModel>;

export const getProducts: RouteHandler<GetProductsHandler> = async (request, reply) => {
	const repositoryName = request.params.repositoryName;

	const area = await fetch(
		`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/ecommerce/products?RepositoryName=${repositoryName}`
	).then((res) => res.json());

	reply.send(area);
};

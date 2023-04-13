import { RouteHandler } from "fastify";
import { GetProductQueryType, GetProductsQueryType, GetProductVariantQueryType } from "@server/feature/products/schema";
import { ProductListViewModel } from "@infrastructure/types/generated/commerce/models/ProductListViewModel";
import { GenericRouteHandler } from "@server/types";
import { ProductViewModel } from "@infrastructure/types/generated/commerce/models/ProductViewModel";

export type GetProductsHandler = GenericRouteHandler<GetProductsQueryType, ProductListViewModel>;

export const getProducts: RouteHandler<GetProductsHandler> = async (request, reply) => {
	const repositoryName = request.params.repositoryName;

	const res = await fetch(
		`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/ecommerce/products?RepositoryName=${repositoryName}`
	).then((res) => res.json());

	reply.send(res);
};

export type GetProductHandler = GenericRouteHandler<GetProductQueryType, ProductViewModel>;

export const getProduct: RouteHandler<GetProductHandler> = async (request, reply) => {
	const id = request.params.id;

	const res = await fetch(`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/ecommerce/products/${id}`).then((res) =>
		res.json()
	);

	reply.send(res);
};

export type GetProductVariantHandler = GenericRouteHandler<GetProductVariantQueryType, ProductViewModel>;

export const getProductVariant: RouteHandler<GetProductVariantHandler> = async (request, reply) => {
	const productId = request.params.productId;
	const variantId = request.params.variantId;

	const res = await fetch(
		`http://kruso.dw10demo.dynamicweb-cms.com/dwapi/ecommerce/products/${productId}/${variantId}`
	).then((res) => res.json());

	reply.send(res);
};

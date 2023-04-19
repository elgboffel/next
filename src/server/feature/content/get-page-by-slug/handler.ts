import { GetPageBySlugQueryType } from "./schema";
import { GenericRouteHandler } from "@server/types";
import { RouteHandler } from "fastify";
import { GetPageBySlugDocument, GetPageBySlugQuery } from "@infrastructure/types/generated/content";
import { AppError } from "@infrastructure/errors/app-error/app-error";
import { fetchContentServerSide } from "@infrastructure/fetchers/content-fetcher";

export type GetPageBySlugHandler = GenericRouteHandler<GetPageBySlugQueryType, GetPageBySlugQuery | AppError>;

export const getPageBySlug: RouteHandler<GetPageBySlugHandler> = async (request, reply) => {
	const slug = request.params.slug;

	const res = await fetchContentServerSide<GetPageBySlugQuery>({
		query: GetPageBySlugDocument,
		variables: { slug },
	});

	if (res instanceof AppError) reply.send(res);
	else reply.send(res.data);
};

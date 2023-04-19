import { GetPageBySlugQueryType } from "./schema";
import { GenericRouteHandler } from "@server/types";
import { RouteHandler } from "fastify";
import { contentFetcher } from "@infrastructure/fetchers/content-fetcher";
import { GetPageBySlugDocument, GetPageBySlugQuery } from "@infrastructure/types/generated/content";
import { AppError } from "@infrastructure/errors/app-error/app-error";

export type GetPageBySlugHandler = GenericRouteHandler<GetPageBySlugQueryType, GetPageBySlugQuery | AppError>;

export const getPageBySlug: RouteHandler<GetPageBySlugHandler> = async (request, reply) => {
	const slug = request.params.slug;

	const res = await contentFetcher.server<GetPageBySlugQuery>({
		query: GetPageBySlugDocument,
		variables: { slug },
	});

	if (res instanceof AppError) reply.send(res);
	else reply.send(res.data);
};

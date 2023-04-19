import { GenericRouteHandler } from "@server/types";
import { RouteHandler } from "fastify";
import { AppError } from "@infrastructure/errors/app-error/app-error";
import { fetchContentServerSide } from "@infrastructure/fetchers/content-fetcher";
import { GetPathsDocument, GetPathsQuery } from "@infrastructure/types/generated/content";

export type GetPathsHandler = GenericRouteHandler<never, GetPathsQuery | AppError>;

export const getPaths: RouteHandler<GetPathsHandler> = async (request, reply) => {
	const res = await fetchContentServerSide<GetPathsQuery>({
		query: GetPathsDocument,
	});

	if (res instanceof AppError) reply.send(res);
	else reply.send(res.data);
};

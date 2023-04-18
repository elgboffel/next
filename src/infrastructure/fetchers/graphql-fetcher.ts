import { GraphQLFetcher, GraphQLResponse } from "@infrastructure/fetchers/types";
import { stripIgnoredCharacters } from "graphql/utilities";
import { fetcher } from "@infrastructure/fetchers/fetcher";
import { AppError } from "@infrastructure/errors/app-error/app-error";

export async function graphqlFetcher<TResponse>({
	url,
	query,
	variables,
	config,
}: GraphQLFetcher): Promise<GraphQLResponse<TResponse> | AppError> {
	return await fetcher<GraphQLResponse<TResponse>>({
		url,
		config: {
			method: "POST",
			body: JSON.stringify({
				query: stripIgnoredCharacters(query),
				variables,
			}),
			...config,
			headers: {
				...(config?.headers ? { ...config.headers } : {}),
			},
		},
	});
}

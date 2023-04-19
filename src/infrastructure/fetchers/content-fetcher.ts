import { graphqlFetcher } from "@infrastructure/fetchers/graphql-fetcher";
import { GraphQLFetcher } from "@infrastructure/fetchers/types";
import { env as serverEnv } from "@infrastructure/env/server.mjs";
import { env as clientEnv } from "@infrastructure/env/client.mjs";

async function fetchContentServerSide<TResponse>(args: Omit<GraphQLFetcher, "url">) {
	const BASE_URL = serverEnv.CONTENT_GQL_URL;

	return await graphqlFetcher<TResponse>({ url: `${BASE_URL}`, ...args });
}

async function fetchContentClientSide<TResponse>(args: Omit<GraphQLFetcher, "url">) {
	const BASE_URL = clientEnv.CONTENT_GQL_URL;

	return await graphqlFetcher<TResponse>({ url: `${BASE_URL}`, ...args });
}

export const contentFetcher = {
	server: fetchContentServerSide,
	client: fetchContentClientSide,
};

import { graphqlFetcher } from "@infrastructure/fetchers/graphql-fetcher";
import { GraphQLFetcher } from "@infrastructure/fetchers/types";
import { env as serverEnv } from "@infrastructure/env/server.mjs";
import { env as clientEnv } from "@infrastructure/env/client.mjs";

export async function fetchContentServerSide<TResponse>(args: Omit<GraphQLFetcher, "url">) {
	const { config, ...remainingArgs } = args;
	return await graphqlFetcher<TResponse>({
		...remainingArgs,
		url: serverEnv.NEXT_PUBLIC_CONTENT_GQL_URL,
		config: {
			...config,
			headers: {
				...config?.headers,
				Authorization: `Bearer ${serverEnv.NEXT_PUBLIC_CONTENT_READ_ONLY_TOKEN}`,
			},
		},
	});
}

export async function fetchContentClientSide<TResponse>(args: Omit<GraphQLFetcher, "url">) {
	const { config, ...remainingArgs } = args;
	return await graphqlFetcher<TResponse>({
		...remainingArgs,
		url: serverEnv.NEXT_PUBLIC_CONTENT_GQL_URL,
		config: {
			...config,
			headers: {
				...config?.headers,
				Authorization: `Bearer ${clientEnv.NEXT_PUBLIC_CONTENT_READ_ONLY_TOKEN}`,
			},
		},
	});
}

import { env as serverEnv } from "@infrastructure/env/server.mjs";
import { env as clientEnv } from "@infrastructure/env/client.mjs";
import { fetcher, FetcherArgs } from "@infrastructure/fetchers/fetcher";

export async function fetchServerlessServerSide<TResponse>(args: FetcherArgs) {
	const { url, config, ...remainingArgs } = args;
	return await fetcher<TResponse>({
		...remainingArgs,
		url: `${serverEnv.NEXT_PUBLIC_FASTIFY_API_BASE_PATH}/${url}`,
		config: {
			...config,
			headers: {
				...config?.headers,
				Authorization: `Bearer ${serverEnv.FASTIFY_API_WRITE_TOKEN}`,
			},
		},
	});
}

export async function fetchServerlessClientSide<TResponse>(args: FetcherArgs) {
	const { config, ...remainingArgs } = args;
	return await fetcher<TResponse>({
		...remainingArgs,
		url: `${serverEnv.NEXT_PUBLIC_FASTIFY_API_BASE_PATH}/${args.url}`,
		config: {
			...config,
			headers: {
				...config?.headers,
				Authorization: `Bearer ${clientEnv.NEXT_PUBLIC_CONTENT_READ_ONLY_TOKEN}`,
			},
		},
	});
}

import { Static, Type } from "@sinclair/typebox";

export const GetProductsQuerySchema = Type.Object({
	repositoryName: Type.String(),
});

export const GetProductsReplySchema = Type.Array(
	Type.Object({
		id: Type.Number(),
		name: Type.String(),
	})
);

export type GetProductsQueryType = Static<typeof GetProductsQuerySchema>;
export type GetProductsReplyType = Static<typeof GetProductsReplySchema>;

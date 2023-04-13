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

export const GetProductQuerySchema = Type.Object({
	id: Type.String(),
});

export const GetProductReplySchema = Type.Array(
	Type.Object({
		id: Type.Number(),
		name: Type.String(),
	})
);

export type GetProductQueryType = Static<typeof GetProductQuerySchema>;
export type GetProductReplyType = Static<typeof GetProductReplySchema>;

export const GetProductVariantQuerySchema = Type.Object({
	productId: Type.String(),
	variantId: Type.String(),
});

export const GetProductVariantReplySchema = Type.Array(
	Type.Object({
		id: Type.Number(),
		name: Type.String(),
	})
);

export type GetProductVariantQueryType = Static<typeof GetProductVariantQuerySchema>;
export type GetProductVariantReplyType = Static<typeof GetProductVariantReplySchema>;

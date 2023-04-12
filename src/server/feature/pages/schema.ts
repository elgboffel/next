import { Static, Type } from "@sinclair/typebox";

export const GetPagesQuerySchema = Type.Object({
	areaId: Type.String(),
});

export const GetPagesReplySchema = Type.Array(
	Type.Object({
		id: Type.Number(),
		name: Type.String(),
		languages: Type.Array(
			Type.Object({
				culture: Type.Optional(Type.String()),
				pageIsPublished: Type.Optional(Type.Boolean()),
				page: Type.Optional(
					Type.Object({
						id: Type.Number(),
						name: Type.String(),
					})
				),
			})
		),
		path: Type.Array(
			Type.Object({
				id: Type.Number(),
				name: Type.String(),
			})
		),
	})
);

export type GetPagesQueryType = Static<typeof GetPagesQuerySchema>;
export type GetPagesReplyType = Static<typeof GetPagesReplySchema>;

export const GetPagesPathsReplySchema = Type.Array(
	Type.Object({
		id: Type.Number(),
		name: Type.String(),
		culture: Type.String(),
		pageIsPublished: Type.Boolean(),
		page: Type.Object({
			id: Type.Number(),
			name: Type.String(),
		}),
		path: Type.Array(
			Type.Object({
				id: Type.Number(),
				name: Type.String(),
			})
		),
	})
);

export type GetPagesPathsReplyType = Static<typeof GetPagesPathsReplySchema>;

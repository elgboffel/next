import { Static, Type } from "@sinclair/typebox";

export const CreateCartRequestSchema = Type.Object({
	areaId: Type.String(),
});

export const CreateCartReplySchema = Type.Optional(
	Type.Array(
		Type.Object({
			id: Type.Number(),
			name: Type.String(),
			languages: Type.Array(
				Type.Object({
					culture: Type.String(),
					pageIsPublished: Type.Boolean(),
					page: Type.Object({
						id: Type.Number(),
						name: Type.String(),
					}),
				})
			),
			path: Type.Array(
				Type.Object({
					id: Type.Number(),
					name: Type.String(),
				})
			),
		})
	)
);

export type CreateCartRequestType = Static<typeof CreateCartRequestSchema>;
export type CreateCartReplyType = Static<typeof CreateCartReplySchema>;

import { Static, Type } from "@sinclair/typebox";

export const GetPagesQuerySchema = Type.Object({
	areaId: Type.String(),
});

export const GetPagesReplySchema = Type.Array(
	Type.Object({
		id: Type.Number(),
		name: Type.String(),
	})
);

export type GetPagesQueryType = Static<typeof GetPagesQuerySchema>;
export type GetPagesReplyType = Static<typeof GetPagesReplySchema>;

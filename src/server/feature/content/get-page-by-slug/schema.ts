import { Static, Type } from "@sinclair/typebox";

export const GetPageBySlugQuerySchema = Type.Object({
	slug: Type.Required(Type.String()),
});

export type GetPageBySlugQueryType = Static<typeof GetPageBySlugQuerySchema>;

import { Static, Type } from "@sinclair/typebox";

export const HelloWithNameQuerySchema = Type.Object({
	name: Type.String().Required,
});

export const HelloWithNameReplySchema = Type.Object({ hello: Type.String() });

export type HelloWithNameQueryType = Static<typeof HelloWithNameQuerySchema>;
export type HelloWithNameReplyType = Static<typeof HelloWithNameReplySchema>;

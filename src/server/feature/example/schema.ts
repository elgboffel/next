import { Static, Type } from "@sinclair/typebox";

export const HelloQuerySchema = Type.Object({
	name: Type.String().Required,
});

export const HelloReplySchema = Type.Object({ hello: Type.String() });

export type HelloQueryType = Static<typeof HelloQuerySchema>;
export type HelloReplyType = Static<typeof HelloReplySchema>;

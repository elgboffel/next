import { Static, Type } from "@sinclair/typebox";

export const HelloQuerySchema = Type.Object({
	name: Type.String(),
});

export const HelloReplySchema = Type.Object({ hello: Type.String() });

export type HelloQueryType = Static<typeof HelloQuerySchema>;
export type HelloReplyType = Static<typeof HelloReplySchema>;

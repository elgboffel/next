import { Static, Type } from "@sinclair/typebox";

export const GetCsrfTokenReplySchema = Type.Object({ token: Type.String() });

export type GetCsrfTokenReplyType = Static<typeof GetCsrfTokenReplySchema>;

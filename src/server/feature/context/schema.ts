import { FastifySchema } from "fastify";

export const getContextResponseSchemaRef = {
	$id: "GetContextResponse",
	type: "object",
	properties: {
		id: { type: "string" },
	},
};
export const getContextSchema: FastifySchema = {
	params: {
		id: { type: "string" },
	},
	response: {
		200: {
			$ref: "GetContextResponse#",
		},
	},
};

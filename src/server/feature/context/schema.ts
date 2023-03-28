import { FastifySchema } from "fastify";
export const getContextSchema: FastifySchema = {
	params: {
		id: { type: "string" },
	},
	response: {
		200: {
			type: "object",
			properties: {
				id: { type: "string" },
			},
		},
	},
};

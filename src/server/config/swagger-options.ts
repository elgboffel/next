import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const swaggerOptions: FastifySwaggerUiOptions = {
	routePrefix: "/documentation",
	uiConfig: {
		docExpansion: "full",
		deepLinking: false,
	},
	staticCSP: true,
	transformStaticCSP: (header) => header,
	transformSpecification: (swaggerObject) => {
		return swaggerObject;
	},
	transformSpecificationClone: true,
};

import { RequestGenericInterface } from "fastify";

export type GenericParams<T> = RequestGenericInterface & {
	Params: T;
};

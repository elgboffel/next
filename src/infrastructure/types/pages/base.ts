import { GetStaticPropsContext, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppErrorType } from "@infrastructure/errors/types";

export type PageContextBase = GetStaticPropsContext & {
	dictionary?: never;
	cmsSettings?: never;
	commerceSettings?: never;
};

export type GenericPage = {
	error?: AppErrorType;
};

export type Page<Page, Context, Data> = GenericPage & {
	page: Page | null;
	context: Context | null;
	data: Data | null;
	session: never;
};

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

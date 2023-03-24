import { AppProps } from "next/app";
import { NextPageWithLayout, Page, PageContextBase } from "@infrastructure/types/pages/base";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "jotai";
import { HydrateAtomsProvider } from "@infrastructure/providers/hydrate-atoms/HydrateAtomsProvider";

type AppPropsWithLayout = AppProps<Page<unknown, PageContextBase, unknown>> & {
	Component: NextPageWithLayout;
};

const Site = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<SessionProvider session={pageProps.session}>
			<Provider>
				<HydrateAtomsProvider initialValues={[]}>
					<NextNProgress
						color={"#000"}
						startPosition={0.3}
						stopDelayMs={200}
						height={3}
						showOnShallow={false}
						nonce={"my-nonce"}
						options={{ easing: "ease", speed: 500, showSpinner: false }}
					/>
					{getLayout(<Component {...pageProps} />)}
				</HydrateAtomsProvider>
			</Provider>
		</SessionProvider>
	);
};

export default Site;

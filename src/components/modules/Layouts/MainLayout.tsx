"use client";

import React from "react";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { HydrateAtomsProvider } from "@infrastructure/providers/hydrate-atoms/HydrateAtomsProvider";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "jotai";

type MainLayoutProps = WithChildren;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
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
				{children}
			</HydrateAtomsProvider>
		</Provider>
	);
};

export { MainLayout };

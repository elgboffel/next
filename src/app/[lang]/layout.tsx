import { WithChildren } from "@infrastructure/types/helpers/with-children";
import "@styles/global.css";
import { themeClass } from "@styles/theme.css";
import React from "react";

type RootLayoutProps = WithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={themeClass}>
			<body>{children}</body>
		</html>
	);
}

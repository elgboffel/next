import { WithChildren } from "@infrastructure/types/helpers/with-children";
import "@styles/global.css";

type RootLayoutProps = WithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

import { WithChildren } from "@infrastructure/types/helpers/with-children";

type RootLayoutProps = WithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

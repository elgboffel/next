import { WithChildren } from "@infrastructure/types/helpers/with-children";
import "@styles/global.css";
import { HydrateAtomsProvider } from "@infrastructure/providers/hydrate-atoms/HydrateAtomsProvider";

type RootLayoutProps = WithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<HydrateAtomsProvider initialValues={[]}>{children}</HydrateAtomsProvider>
			</body>
		</html>
	);
}

import { theme } from "@styles/theme.css";
import { WithChildren } from "@infrastructure/types/helpers/with-children";

export default function Root({ children }: WithChildren) {
	return (
		<html lang="en">
			<body className={theme}>{children}</body>
		</html>
	);
}

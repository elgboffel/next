import { theme } from "@styles/theme.css";

export default function Root({ children }) {
	return (
		<html lang="en">
			<body className={theme}>{children}</body>
		</html>
	);
}

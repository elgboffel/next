import { Container } from "@components/primitives/Container/Container";
import { Box } from "@components/primitives/Box/Box";

export default async function IndexPage() {
	return (
		<Container>
			<Box color={"error"}>
				<p>Current locale</p>
				<p>This text is rendered on the server: </p>
			</Box>
		</Container>
	);
}

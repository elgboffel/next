import { Container } from "@components/primitives/Container/Container";

export default async function IndexPage() {
	return (
		<Container>
			<p>Current locale</p>
			<p>This text is rendered on the server: </p>
		</Container>
	);
}
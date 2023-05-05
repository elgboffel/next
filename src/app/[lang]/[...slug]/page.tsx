import { Container } from "@components/primitives/Container/Container";

type ContentPageProps = {
	params: { slug: string };
};

export default async function ContentPage({ params }: ContentPageProps) {
	return (
		<Container>
			<p>Current locale</p>
			<p>This text is rendered on the server: </p>
		</Container>
	);
}

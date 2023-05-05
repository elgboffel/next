import React from "react";
import { Container } from "@components/primitives/Container/Container";
import { Box } from "@components/primitives/Box/Box";
import { Text } from "@components/primitives/Text/Text";

type IndexPageProps = { params: { lang: string } };
export default async function IndexPage({ params }: IndexPageProps) {
	return (
		<Container>
			<Box color={"error"}>
				<Text>Current locale {params.lang}</Text>
				<Text>This text is rendered on the server: </Text>
			</Box>
		</Container>
	);
}

import { type NextPage } from "next";
import Head from "next/head";
import { Container } from "@components/primitives/Container/Container";
import { Box } from "@components/primitives/Box/Box";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Next</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Box color={"error"}>
					<p>Index page</p>
				</Box>
			</Container>
		</>
	);
};

export default Home;

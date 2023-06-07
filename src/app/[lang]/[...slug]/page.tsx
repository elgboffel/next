import { fetchServerlessServerSide } from "@infrastructure/fetchers/serverless-fetcher";
import { GetPageBySlugQuery } from "@infrastructure/types/generated/content";
import { AppError } from "@infrastructure/errors/app-error/app-error";
import { Container } from "@components/primitives/Container/Container";

const getData = async () => {
	const data = await fetchServerlessServerSide<GetPageBySlugQuery>({ url: "content/pages/page-2" });

	if (data instanceof AppError) throw Error("Something went wrong fetching data");

	return data;
};

type IndexPageProps = { params: { lang: string } };
export default async function IndexPage({ params }: IndexPageProps) {
	const data = await getData();

	return (
		<Container>
			<p>Current locale</p>
			<p>This text is rendered on the server: </p>
			<p>{JSON.stringify(data)}</p>
		</Container>
	);
}

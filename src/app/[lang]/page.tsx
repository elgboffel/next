type IndexPageProps = { params: { lang: string } };
export default async function IndexPage({ params }: IndexPageProps) {
	return (
		<div>
			<p>Current locale</p>
			<p>This text is rendered on the server: </p>
		</div>
	);
}

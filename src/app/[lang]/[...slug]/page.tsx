type ContentPageProps = {
	params: { slug: string };
};

export default async function ContentPage({ params }: ContentPageProps) {
	return (
		<div>
			<p>Current locale</p>
			<p>This text is rendered on the server: </p>
		</div>
	);
}

import React from "react";
import { GenericPage, NextPageWithLayout } from "@infrastructure/types/pages/base";
import Error from "../../pages/_error";

export const withNextPageError = <T,>(Component: React.FunctionComponent<T>) => {
	const WithErrorPage: NextPageWithLayout<T & GenericPage> = (props) => {
		const error = props?.error;

		if (error)
			return (
				<div>
					<Error {...error} />
				</div>
			);

		return <Component {...props} />;
	};

	return WithErrorPage;
};

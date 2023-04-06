import React from "react";
import { NextPage } from "next";
import SEOHead from "@components/modules/SEOHead/SEOHead";
import { AppErrorType } from "@infrastructure/errors/types";

const Error: NextPage<AppErrorType> = ({ raw, code, url, ...otherProps }) => {
	console.warn({ ...otherProps });

	return (
		<>
			<SEOHead nofollow noindex />

			<div>
				<p>{code ? `An error ${code} occurred on server` : "An error occurred on client"}</p>
				{url && <p>{url}</p>}
				{/*{errors?.map(({ message }, index) => (*/}
				{/*  <Text key={`error-text-${index}`} center>*/}
				{/*    {message}*/}
				{/*  </Text>*/}
				{/*))}*/}
				<p>{JSON.stringify(raw)}</p>
			</div>
		</>
	);
};

export default Error;

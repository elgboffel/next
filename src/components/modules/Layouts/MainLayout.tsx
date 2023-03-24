import React from "react";
import { WithChildren } from "@infrastructure/types/helpers/with-children";

type MainLayoutProps = WithChildren;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return <main>{children}</main>;
};

export { MainLayout };

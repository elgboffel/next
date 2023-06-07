"use client";

import { useHydrateAtoms } from "jotai/utils";
import { FC } from "react";
import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { WritableAtom } from "jotai";

type AnyWritableAtom = WritableAtom<unknown, any[], any>;

export type HydrateAtomsProps = WithChildren & {
	initialValues: Iterable<readonly [AnyWritableAtom, unknown]>;
};
const HydrateAtomsProvider: FC<HydrateAtomsProps> = ({ initialValues, children }) => {
	useHydrateAtoms(initialValues);

	return <>{children}</>;
};

export { HydrateAtomsProvider };

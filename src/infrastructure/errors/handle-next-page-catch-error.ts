import { AppError } from "@infrastructure/errors/app-error";

export const handleNextPageCatchError = (e: unknown) => {
	if (e instanceof AppError) {
		console.warn(`Api Error while requesting data: ${JSON.stringify(e)}`);
		return e;
	}

	throw new Error(`Unknown Api Error while requesting data: ${JSON.stringify(e)}`);
};

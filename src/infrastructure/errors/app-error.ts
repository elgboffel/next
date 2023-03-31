import { ErrorType } from "@infrastructure/errors/types";

export class AppError implements ErrorType {
	constructor(error: any) {
		if (error instanceof Error) this.serializeError(error);
		else if (this.isErrorType(error)) this.serializeErrorType(error);
		else this.invalidErrorType(error);
	}

	serializeError(error: Error) {
		this.isSuccess = false;
		this.raw = error?.stack ?? null;
		this.url = null;
		this.message = error?.message ?? null;
		this.code = 500;
	}

	serializeErrorType(error: ErrorType) {
		this.isSuccess = error?.isSuccess ?? null;
		this.raw = error?.raw ?? null;
		this.url = error?.url ?? null;
		this.code = error?.code ?? null;
		this.message = error?.message ?? null;
	}

	private invalidErrorType(error: any) {
		throw new Error(`AppError: Error type not supported`, error);
	}

	private isErrorType(obj: any) {
		return "error" in obj && "isSuccess" in obj && "raw" in obj && "url" in obj && "message" in obj && "code" in obj;
	}

	isSuccess: boolean | null = null;
	raw: string | null = null;
	url: string | null = null;
	code: number | null = null;
	message: string | null = null;
}

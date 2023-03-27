import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Rewrite if pathname includes `/serverless`
	if (pathname.includes("/serverless")) {
		return NextResponse.rewrite(new URL(`/serverless`, request.nextUrl));
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

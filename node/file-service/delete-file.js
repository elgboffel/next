import fs from "fs";
import path from "path";

export const deleteFile = (relativePath) => {
	const dir = path.join(process.cwd(), `${relativePath}`);

	if (!fs.existsSync(dir)) return;

	try {
		fs.rmdirSync(dir, { recursive: true });
	} catch (error) {
		console.error(`ERROR | Could not remove directory: ${dir}`);
		return null;
	}
};

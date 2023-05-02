import { existsSync } from "fs";
import path from "path";
import { getAllFiles } from "../../file-service/get-all-files.js";
import { getFile } from "../../file-service/get-file.js";
import { createFile } from "../../file-service/create-file.js";

const FOLDER_PATH = "/src/infrastructure/types/generated/commerce/models";

function convertBackwardsSlashToForwardSlash() {
	const dir = path.join(process.cwd(), FOLDER_PATH);

	if (!existsSync(dir)) throw Error(`Directory not found: src/infrastructure/types/generated/commerce/models`);

	const files = getAllFiles(dir);

	files.forEach((name) => {
		const file = getFile(path.join(FOLDER_PATH, `/${name}`));

		/* Replace all backwards slash with forward slash */
		const newFile = file.replace(/\\/g, "/");

		createFile(name, FOLDER_PATH, newFile);
		console.log(`Replaced backwards slash to forward slash in file:\n${name}`);
	});
}

convertBackwardsSlashToForwardSlash();

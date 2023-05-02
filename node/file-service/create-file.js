import fs from "fs";
import path from "path";

export const createFile = (fileName, directory, data, config = { createDir: false }) => {
  const dir = path.join(process.cwd(), directory);

  if (config.createDir && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    fs.writeFileSync(`${dir}/${fileName}`, data, "utf8");
  } catch (error) {
    console.error(`Error | Could not write file on path ${dir}/${fileName}`);
    console.error(error);
  }
};

import fs from "fs";
import path from "path";

export const getFile = (relativePath, config = { json: false }) => {
  const dir = path.join(process.cwd(), relativePath);
  let data;

  if (!fs.existsSync(dir)) return null;

  try {
    if (config.json === true) data = JSON.parse(fs.readFileSync(dir, "utf8"));

    data = fs.readFileSync(dir, "utf8");
  } catch (error) {
    console.error(`ERROR | File not initialized on path ${error}`);
    return null;
  }

  return data;
};

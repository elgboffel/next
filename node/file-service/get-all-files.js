import fs from "fs";

export const getAllFiles = (dir) => {
  let data;

  try {
    data = fs.readdirSync(dir, "utf8");
  } catch (error) {
    console.error(`Unable to scan directory: ${error}`);
    return null;
  }

  return data;
};

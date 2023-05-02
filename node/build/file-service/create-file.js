"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var createFile = function (fileName, directory, data, config) {
    if (config === void 0) { config = { createDir: false }; }
    var dir = path_1.default.join(process.cwd(), directory);
    if (config.createDir && !fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
    try {
        fs_1.default.writeFileSync("".concat(dir, "/").concat(fileName), data, "utf8");
    }
    catch (error) {
        console.error("Error | Could not write file on path ".concat(dir, "/").concat(fileName));
        console.error(error);
    }
};
exports.createFile = createFile;

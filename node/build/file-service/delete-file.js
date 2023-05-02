"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var deleteFile = function (relativePath) {
    var dir = path_1.default.join(process.cwd(), "".concat(relativePath));
    if (!fs_1.default.existsSync(dir))
        return;
    try {
        fs_1.default.rmdirSync(dir, { recursive: true });
    }
    catch (error) {
        console.error("ERROR | Could not remove directory: ".concat(dir));
        return null;
    }
};
exports.deleteFile = deleteFile;

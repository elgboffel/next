"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var getFile = function (relativePath, config) {
    if (config === void 0) { config = { json: false }; }
    var dir = path_1.default.join(process.cwd(), relativePath);
    var data;
    if (!fs_1.default.existsSync(dir))
        return null;
    try {
        if (config.json === true)
            data = JSON.parse(fs_1.default.readFileSync(dir, "utf8"));
        data = fs_1.default.readFileSync(dir, "utf8");
    }
    catch (error) {
        console.error("ERROR | File not initialized on path ".concat(error));
        return null;
    }
    return data;
};
exports.getFile = getFile;

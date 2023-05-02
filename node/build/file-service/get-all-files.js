"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
var fs_1 = __importDefault(require("fs"));
var getAllFiles = function (dir) {
    var data;
    try {
        data = fs_1.default.readdirSync(dir, "utf8");
    }
    catch (error) {
        console.error("Unable to scan directory: ".concat(error));
        return null;
    }
    return data;
};
exports.getAllFiles = getAllFiles;

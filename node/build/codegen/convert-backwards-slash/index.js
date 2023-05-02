"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var get_all_files_js_1 = require("../../file-service/get-all-files.js");
var get_file_js_1 = require("../../file-service/get-file.js");
var create_file_js_1 = require("../../file-service/create-file.js");
var FOLDER_PATH = "/src/infrastructure/types/generated/commerce/models";
function convertBackwardsSlashToForwardSlash() {
    var dir = path_1.default.join(process.cwd(), FOLDER_PATH);
    if (!(0, fs_1.existsSync)(dir))
        throw Error("Directory not found: src/infrastructure/types/generated/commerce/models");
    var files = (0, get_all_files_js_1.getAllFiles)(dir);
    files.forEach(function (name) {
        var file = (0, get_file_js_1.getFile)(path_1.default.join(FOLDER_PATH, "/".concat(name)));
        /* Replace all backwards slash with forward slash */
        var newFile = file.replace(/\\/g, "/");
        (0, create_file_js_1.createFile)(name, FOLDER_PATH, newFile);
        console.log("Replaced backwards slash to forward slash in file:\n".concat(name));
    });
}
convertBackwardsSlashToForwardSlash();

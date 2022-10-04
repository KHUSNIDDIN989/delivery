"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_CATEGORY = exports.ALL_CATEGORIES = void 0;
const path_1 = __importDefault(require("path"));
const model_1 = require("./model");
const ALL_CATEGORIES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, model_1.allCategories)());
    }
    catch (err) {
        console.log(err);
    }
});
exports.ALL_CATEGORIES = ALL_CATEGORIES;
const ADD_CATEGORY = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { addCategory } = req.body;
        let imgs = (_a = req.files) === null || _a === void 0 ? void 0 : _a.file;
        console.log();
        imgs === null || imgs === void 0 ? void 0 : imgs.mv(path_1.default.join(__dirname, "../../uploads", imgs.name), (err) => {
            if (err) {
                throw err;
            }
        });
        res.status(200).json({
            status: 200,
            data: yield (0, model_1.addCategories)(addCategory, path_1.default.join(__dirname, "../../uploads", imgs.name)),
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ADD_CATEGORY = ADD_CATEGORY;
const UPDATE_CATEGORY = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addCategory, categoryImg } = req.body;
        res.status(200).json({
            status: 200,
            data: yield (0, model_1.addCategories)(addCategory, categoryImg),
        });
    }
    catch (err) {
        console.log(err);
    }
});

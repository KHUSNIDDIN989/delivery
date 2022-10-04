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
exports.DELETE_RESTAURANT = exports.ADD_RESTAURANT = exports.ALL_RESTAURANTS = void 0;
const model_1 = require("./model");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const ALL_RESTAURANTS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, model_1.allRestaurants)());
    }
    catch (err) {
        if (err)
            throw err;
    }
});
exports.ALL_RESTAURANTS = ALL_RESTAURANTS;
const ADD_RESTAURANT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { resName, resReyting, categoryId } = req.body;
        const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.resImage;
        const student_profile_img = Date.now() + file.name.replace(/\s/g, "");
        file.mv(path_1.default.join(process.cwd(), "dist", "src", "uploads", student_profile_img), (err) => {
            if (err)
                throw err;
        });
        res.json({
            status: 200,
            message: "successfully",
            data: yield (0, model_1.addRestaurant)(resName, "/uploads/" + student_profile_img, resReyting, categoryId),
        });
    }
    catch (err) {
        if (err)
            throw err;
    }
});
exports.ADD_RESTAURANT = ADD_RESTAURANT;
const DELETE_RESTAURANT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { restaurantId } = req.params;
        const foundRestaurant = yield (0, model_1.deleteRestaurant)(restaurantId);
        console.log();
        fs_1.default.unlink(process.cwd() + "/dist/src" + foundRestaurant[0].restaurant_img, (err) => {
            console.log(err);
        });
        res.json(foundRestaurant);
    }
    catch (err) {
        if (err)
            throw err;
    }
});
exports.DELETE_RESTAURANT = DELETE_RESTAURANT;

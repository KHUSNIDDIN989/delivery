"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./modules/index"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)());
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "/uploads")));
// fs.unlink(__dirname + "/uploads/1664795345366download.jpeg", (err) => {
//   console.log(err);
// });
app.use("/", index_1.default);
app.use("/*", (_, res) => {
    try {
        res.status(404).json({
            status: 404,
            message: "not found",
        });
    }
    catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => {
    console.log(PORT);
});

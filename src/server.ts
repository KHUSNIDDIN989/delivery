import express, { Request, Response } from "express";
import router from "./modules/index";
import expressFileUpload from "express-fileupload";
import path from "path";
const app: express.Application = express();
import fs from "fs"

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(expressFileUpload());

app.use( "/uploads",express.static(path.join(__dirname, "/uploads")));

// fs.unlink(__dirname + "/uploads/1664795345366download.jpeg", (err) => {
//   console.log(err);
// });
app.use("/", router);

app.use("/*", (_, res: Response) => {
  try {
    res.status(404).json({
      status: 404,
      message: "not found",
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, (): void => {
  console.log(PORT);
});

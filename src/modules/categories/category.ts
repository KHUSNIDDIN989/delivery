import { Request, Response } from "express";
import path from "path";
import { UploadedFile } from "express-fileupload";
import { allCategories, addCategories } from "./model";

const ALL_CATEGORIES = async (req: Request, res: Response) => {
  try {
    res.json(await allCategories());
  } catch (err) {
    console.log(err);
  }
};

const ADD_CATEGORY = async (req: Request, res: Response) => {
  try {
    const { addCategory } = req.body;

    let imgs = req.files?.file as UploadedFile;

    console.log();
    imgs?.mv(path.join(__dirname, "../../uploads", imgs.name), (err: Error) => {
      if (err) {
        throw err;
      }
    });

    res.status(200).json({
      status: 200,
      data: await addCategories(
        addCategory,
        path.join(__dirname, "../../uploads", imgs.name)
      ),
    });
  } catch (err) {
    console.log(err);
  }
};

const UPDATE_CATEGORY = async (req: Request, res: Response) => {
  try {
    const { addCategory, categoryImg } = req.body;
    res.status(200).json({
      status: 200,
      data: await addCategories(addCategory, categoryImg),
    });
  } catch (err) {
    console.log(err);
  }
};
export { ALL_CATEGORIES, ADD_CATEGORY };

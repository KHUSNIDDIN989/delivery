import { Request, Response } from "express";
import { allRestaurants, addRestaurant, deleteRestaurant } from "./model";
import path from "path";
import fs from "fs";

const ALL_RESTAURANTS = async (req: Request, res: Response) => {
  try {
    res.json(await allRestaurants());
  } catch (err) {
    if (err) throw err;
  }
};

const ADD_RESTAURANT = async (req: Request, res: Response): Promise<any> => {
  try {
    const { resName, resReyting, categoryId } = req.body;
    const file = req.files?.resImage as any;
    const student_profile_img = Date.now() + file.name.replace(/\s/g, "");
    file.mv(
      path.join(process.cwd(), "dist", "src", "uploads", student_profile_img),
      (err: Error) => {
        if (err) throw err;
      }
    );
    res.json({
      status: 200,
      message: "successfully",
      data: await addRestaurant(
        resName,
        "/uploads/" + student_profile_img,
        resReyting,
        categoryId
      ),
    });
  } catch (err) {
    if (err) throw err;
  }
};

const DELETE_RESTAURANT = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;

    const foundRestaurant: any = await deleteRestaurant(restaurantId);
    console.log();
    
    fs.unlink(
      process.cwd() + "/dist/src" + foundRestaurant[0].restaurant_img,
      (err) => {
        console.log(err);
      }
    );

    res.json(foundRestaurant);
  } catch (err) {
    if (err) throw err;
  }
};

export { ALL_RESTAURANTS, ADD_RESTAURANT, DELETE_RESTAURANT };

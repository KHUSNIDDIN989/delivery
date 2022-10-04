import { Router } from "express";
import { ALL_CATEGORIES, ADD_CATEGORY } from "./categories/category";
import { ADD_RESTAURANT, ALL_RESTAURANTS, DELETE_RESTAURANT } from "./restaurants/restaurant";
const router = Router();

router
  .get("/categories", ALL_CATEGORIES)
  .get("/restaurants", ALL_RESTAURANTS)
  .post("/categories", ADD_CATEGORY)
  .post("/restaurant", ADD_RESTAURANT)
  .delete("/restaurant/:restaurantId", DELETE_RESTAURANT);

export default router;

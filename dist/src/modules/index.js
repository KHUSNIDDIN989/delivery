"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("./categories/category");
const restaurant_1 = require("./restaurants/restaurant");
const router = (0, express_1.Router)();
router
    .get("/categories", category_1.ALL_CATEGORIES)
    .get("/restaurants", restaurant_1.ALL_RESTAURANTS)
    .post("/categories", category_1.ADD_CATEGORY)
    .post("/restaurant", restaurant_1.ADD_RESTAURANT)
    .delete("/restaurant/:restaurantId", restaurant_1.DELETE_RESTAURANT);
exports.default = router;

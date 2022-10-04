"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.addRestaurant = exports.allRestaurants = void 0;
const postgress_1 = require("../../utils/postgress");
const ALL_RESTAURANTS = `
    SELECT 
        *
    FROM 
        restaurants
`;
const ADD_RESTAURANT = `
    INSERT 
    INTO 
        restaurants (restaurant_name, restaurant_img, restaurant_reyting, cotegory_id) 
    VALUES ($1, $2, $3, $4) RETURNING *;
`;
// const UPDATE_CATEGORY: string = `
//     UPDATE
//         cotegories
//     SET
//         cotegory_name = $1
//         cotegory_img = $2
//     WHERE 
//         cotegory_id = $3
//     RETURNING *
// `;
const DELETE_RESTAURANT = `
    DELETE 
    FROM 
        restaurants
    WHERE 
        restaurant_id = $1 RETURNING *;
`;
const allRestaurants = () => (0, postgress_1.fetchData)(ALL_RESTAURANTS);
exports.allRestaurants = allRestaurants;
const addRestaurant = (restaurant_name, restaurant_img, restaurant_reyting, cotegory_id) => (0, postgress_1.fetchData)(ADD_RESTAURANT, restaurant_name, restaurant_img, restaurant_reyting, cotegory_id);
exports.addRestaurant = addRestaurant;
// const updateCategory = (categoryName: String, categoryImg: string) =>
//   fetchData(UPDATE_CATEGORY, categoryName, categoryImg);
const deleteRestaurant = (restaurantId) => (0, postgress_1.fetchData)(DELETE_RESTAURANT, restaurantId);
exports.deleteRestaurant = deleteRestaurant;

import { fetchData } from "../../utils/postgress";

const ALL_RESTAURANTS: string = `
    SELECT 
        *
    FROM 
        restaurants
`;

const ADD_RESTAURANT: string = `
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

const DELETE_RESTAURANT: string = `
    DELETE 
    FROM 
        restaurants
    WHERE 
        restaurant_id = $1 RETURNING *;
`;

const allRestaurants = () => fetchData(ALL_RESTAURANTS);
const addRestaurant = (
  restaurant_name: string,
  restaurant_img: string,
  restaurant_reyting: string,
  cotegory_id: number
) =>
  fetchData(
    ADD_RESTAURANT,
    restaurant_name,
    restaurant_img,
    restaurant_reyting,
    cotegory_id
  );
// const updateCategory = (categoryName: String, categoryImg: string) =>
//   fetchData(UPDATE_CATEGORY, categoryName, categoryImg);
const deleteRestaurant = (restaurantId: string) =>
  fetchData(DELETE_RESTAURANT, restaurantId);

export { allRestaurants, addRestaurant, deleteRestaurant };

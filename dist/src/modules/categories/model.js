"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.addCategories = exports.allCategories = void 0;
const postgress_1 = require("../../utils/postgress");
const ALL_CATEGORIES = `
    SELECT 
        *
    FROM 
        cotegories
`;
const ADD_CATEGORY = `
    INSERT 
    INTO 
        cotegories (cotegory_name, cotegory_img) 
    VALUES ($1, $2) RETURNING *;
`;
const UPDATE_CATEGORY = `
    UPDATE
        cotegories
    SET
        cotegory_name = $1
        cotegory_img = $2
    WHERE 
        cotegory_id = $3
    RETURNING *
`;
const DELETE_CATEGORY = `
    DELETE 
    FROM 
        cotegories 
    WHERE 
        cotegory_id = $1 RETURNING *;;
`;
const allCategories = () => (0, postgress_1.fetchData)(ALL_CATEGORIES);
exports.allCategories = allCategories;
const addCategories = (categoryName, categoryImg) => (0, postgress_1.fetchData)(ADD_CATEGORY, categoryName, categoryImg);
exports.addCategories = addCategories;
const updateCategory = (categoryName, categoryImg) => (0, postgress_1.fetchData)(UPDATE_CATEGORY, categoryName, categoryImg);
exports.updateCategory = updateCategory;
const deleteCategory = (categoryId) => (0, postgress_1.fetchData)(DELETE_CATEGORY, categoryId);
exports.deleteCategory = deleteCategory;

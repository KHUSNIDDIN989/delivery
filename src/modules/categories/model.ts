import { fetchData } from "../../utils/postgress";

const ALL_CATEGORIES: string = `
    SELECT 
        *
    FROM 
        cotegories
`;

const ADD_CATEGORY: string = `
    INSERT 
    INTO 
        cotegories (cotegory_name, cotegory_img) 
    VALUES ($1, $2) RETURNING *;
`;

const UPDATE_CATEGORY: string = `
    UPDATE
        cotegories
    SET
        cotegory_name = $1
        cotegory_img = $2
    WHERE 
        cotegory_id = $3
    RETURNING *
`;

const DELETE_CATEGORY: string = `
    DELETE 
    FROM 
        cotegories 
    WHERE 
        cotegory_id = $1 RETURNING *;;
`;

const allCategories = () => fetchData(ALL_CATEGORIES);
const addCategories = (categoryName: any, categoryImg: any) =>
  fetchData(ADD_CATEGORY, categoryName, categoryImg);
const updateCategory = (categoryName: String, categoryImg: string) =>
  fetchData(UPDATE_CATEGORY, categoryName, categoryImg);
const deleteCategory = (categoryId: string) =>
  fetchData(DELETE_CATEGORY, categoryId);

export { allCategories, addCategories, updateCategory, deleteCategory };

import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";
export const setCategories = (categoryArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoryArray);
};

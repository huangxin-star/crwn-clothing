import { createSelector } from "reselect";
import { CategoriesState } from "./categories-reducer";
import { categoryMap } from "./categories.type";
import { RootState } from "../store";
const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories) => {
    console.log("within selector");
    console.log(categories);
    return categories.categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as categoryMap);
  }
);

export const selectCatMap = ({ categories }) => {
  console.log("within selector");
  console.log(categories);
  return categories.categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

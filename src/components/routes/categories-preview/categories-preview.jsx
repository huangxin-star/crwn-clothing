import React from "react";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import CategoryPreview from "../../category-preview/category-preview";
import { Fragment } from "react";
export default function CategoriesPreivew() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            product={product}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
}

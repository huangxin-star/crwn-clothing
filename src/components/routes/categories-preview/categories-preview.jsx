import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";
import CategoryPreview from "../../category-preview/category-preview";
import { selectCategoriesIsLoading } from "../../../store/categories/categories.selector";
import Spinner from "../../spinner/spinner";
import { Fragment } from "react";
export default function CategoriesPreivew() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const product = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={product} />
          );
        })
      )}
    </Fragment>
  );
}

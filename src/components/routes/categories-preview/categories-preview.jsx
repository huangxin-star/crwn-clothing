import { CategoriesContext } from "../../../contexts/categories.context";
import React, { useContext } from "react";
import CategoryPreview from "../../category-preview/category-preview";
export default function CategoriesPreivew() {
  const { categoryMap } = useContext(CategoriesContext);
  return <div className="category-preview-container">
    {Object.keys(categoryMap).map((title) =>{
      const product = categoryMap[title]
      return (
        <CategoryPreview key={title} title={title} product={product}></CategoryPreview>
      )
    })}
  </div>;
}

import React from "react";
import CategoryItem from "../directory-item/directory-item";
import {DirectoryContainer} from "./directory.style";
const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
export default Directory;
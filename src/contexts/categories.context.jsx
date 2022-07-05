import { createContext, useState, useEffect } from "react";
import React from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";
export const CategoriesContext = createContext({
  categoryMap: {},
});
export const CategorieyProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoryMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

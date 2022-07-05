import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setCategories } from "../../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase";
import CategoriesPreivew from "../categories-preview/categories-preview";
import Category from "../category/category";
import "./shop.scss";
export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreivew></CategoriesPreivew>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
}

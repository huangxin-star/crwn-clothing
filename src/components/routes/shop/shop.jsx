import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCategoriesStartAsync } from "../../../store/categories/categories.action";
import CategoriesPreivew from "../categories-preview/categories-preview";
import Category from "../category/category";
import "./shop.scss";
export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreivew></CategoriesPreivew>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
}

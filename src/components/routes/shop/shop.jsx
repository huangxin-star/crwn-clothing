import { Routes,Route } from "react-router-dom";
import CategoriesPreivew from "../categories-preview/categories-preview";
import Category from "../category/category";
import "./shop.scss";
export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreivew></CategoriesPreivew>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  )
}

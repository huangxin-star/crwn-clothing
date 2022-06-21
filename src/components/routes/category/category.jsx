import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import Productcard from "../../product-card/product-card";
import './category.scss'
export default function Category() {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [product, setProduct] = useState(categoryMap[category]);
  useEffect(() => {
    setProduct(categoryMap[category]);
  }, [category, categoryMap]);
  return (
    <div>
      <div className="category-container">
        {product && product.map((product) => (
          <Productcard key={product.id} product={product}></Productcard>
        ))}
      </div>
    </div>
  );
}

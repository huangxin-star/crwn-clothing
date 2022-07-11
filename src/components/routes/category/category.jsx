import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Productcard from "../../product-card/product-card";
import { CategoryContainer, Title } from './category.style';
import './category.style.jsx'
import { useSelector } from "react-redux";
import { selectCategoriesMap,selectCategoriesIsLoading } from "../../../store/categories/categories.selector";
import Spinner from "../../spinner/spinner";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log('rendering category');
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
    <Title>{category.toUpperCase()}</Title>
    {isLoading ? (
      <Spinner />
    ) : (
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    )}
  </Fragment>
  );
};

export default Category;

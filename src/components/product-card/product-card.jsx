import React, { useContext } from "react";
import "./product-card.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { CartContext } from "../../contexts/cart.context";
export default function Productcard({ product }) {
  console.log("购物车", product);
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
}

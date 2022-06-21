import React from "react";
import "./checkout-item.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const clearItemHander = () => clearItemFromCart(cartItem);
  const addItemHander = () => addItemToCart(cartItem);
  const removeItemHander = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <div className="quantity">
        <div className="arrow" onClick={removeItemHander}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHander}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHander}>
        &#10005;
      </div>
    </div>
  );
}

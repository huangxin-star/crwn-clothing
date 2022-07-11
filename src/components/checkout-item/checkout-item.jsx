import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./checkout-item.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHander = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHander = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHander = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
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

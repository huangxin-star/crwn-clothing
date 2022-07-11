import "./checkout.scss";
import React from "react";
import CheckoutItem from "../checkout-item/checkout-item";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItems) => {
        return (
          <CheckoutItem cartItem={cartItems} key={cartItems.id}></CheckoutItem>
        );
      })}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
}

import "./checkout.scss";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item";
export default function Checkout() {
  const { cartItems, cartCount,cartTotal } =
    useContext(CartContext);
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
          <CheckoutItem cartItem ={cartItems} key={cartItems.id}></CheckoutItem>
        );
      })}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
}

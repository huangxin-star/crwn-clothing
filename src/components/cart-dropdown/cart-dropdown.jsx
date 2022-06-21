import React, { useContext } from "react";
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
import { CartContext } from "../../contexts/cart.context";
import {CartDropdownContainer,EmptyMessage,CartItems} from "./cart-dropdown.style.jsx";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
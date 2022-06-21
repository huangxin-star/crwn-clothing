import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ShoppingSvg, IconContainer, ItemCount } from "./cart-icon.style.jsx";
import { CartContext } from "../../contexts/cart.context";
export default function CartIcon() {
  console.log("CartContext", CartContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingSvg></ShoppingSvg>
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
}

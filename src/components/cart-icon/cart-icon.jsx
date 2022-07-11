import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ShoppingSvg, IconContainer, ItemCount } from "./cart-icon.style.jsx";
export default function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingSvg></ShoppingSvg>
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
}

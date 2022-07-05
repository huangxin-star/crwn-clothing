import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import CartIcon from "../../cart-icon/cart-icon";
import { CartContext } from "../../../contexts/cart.context";
import CartDropdown from "../../cart-dropdown/cart-dropdown";
import { ReactComponent as CrwnLogp } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase";
import { selectCurrentUser } from "../../../store/user/user.selector";
export default function Navigation() {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/" className="logo-container">
          <CrwnLogp className="logo"></CrwnLogp>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" className="logo-container">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className="nav-link" onClick={signOutUser}>
              sign out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
}

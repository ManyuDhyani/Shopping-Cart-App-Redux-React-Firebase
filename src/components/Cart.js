import React from "react";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
const quantity = useSelector(state => state.cart.totalQuantity);
const dispatch = useDispatch();
const showCart = () => {
  dispatch(cartActions.setShowCart());
};
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;

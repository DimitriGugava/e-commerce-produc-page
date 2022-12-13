import "./cart.css";
import { useState } from "react";
import deleteicon from "../icons/deleteicon.svg";
const Cart = (props) => {
  return (
    <div>
      {props.displayCart && (
        <div className="cartContainer">
          <a className="cartCartText">Cart</a>
          <div className="cartLine"></div>

          {
            (!props.productNumber,
            props.deleteProduct,
            props.dontShowNeedBtn ? (
              <p className="cartIsEmptyText">Your cart is empty.</p>
            ) : (
              <div className="selectedProductCart">
                <img
                  className="selectedCartImg"
                  src={process.env.PUBLIC_URL + props.info.images[3]}
                />
                <div className="namePriceCartBox">
                  <a className="selectedProductName">{props.info.season}</a>
                  <a className="ProductPriceCart">
                    ${props.info.currentPrice} x {props.productNumber} Total $
                    {props.num}
                  </a>
                </div>
                <img
                  src={deleteicon}
                  className="cartDelete"
                  onClick={props.deleteBtn}
                />
              </div>
            ))
          }
          {
            (props.productNumber,
            !props.deleteProduct,
            !props.dontShowNeedBtn ? (
              <button className="checkoutButton">Checkout</button>
            ) : null)
          }
        </div>
      )}
    </div>
  );
};
export default Cart;

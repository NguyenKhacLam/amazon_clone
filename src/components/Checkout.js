import React, { createRef } from "react";
import "./../styles/Checkout.css";
import SubTotal from "./SubTotal";
import ProductBasketItem from "./ProductBasketItem";
import { useStateValue } from "./../context/StateProvider";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/ad-specs/fire_tv_inline_banner_rating_label.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.length === 0 ? (
            <div className="checkout__empty">
              <h3>Your basket is empty</h3>
              <Link to="/">
                <div className="checkout__back">
                  <ArrowBackIcon />
                  Back to home
                </div>
              </Link>
            </div>
          ) : (
            <div>
              <FlipMove>
                {basket?.map((item) => (
                  <ProductBasketItem item={item} key={item.id} />
                ))}
              </FlipMove>
            </div>
          )}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;

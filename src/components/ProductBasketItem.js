import React, { forwardRef } from "react";
import "./../styles/ProductBasketItem.css";
import { useStateValue } from "./../context/StateProvider";

const ProductBasketItem = forwardRef(({ item }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };

  return (
    <div className="productBasketItem" ref={ref}>
      <img src={item.image} alt="" />
      <div className="productBasketItem__content">
        <h3>{item.title}</h3>
        <p>$ {item.price}</p>
        <div className="product__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
});

export default ProductBasketItem;

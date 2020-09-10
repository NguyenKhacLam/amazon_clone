import React from "react";
import "./../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../context/StateProvider";
import { getBasketTotal } from "./../context/reducer";

function SubTotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): <strong>{value}</strong>
            </p>
            <small className="subTotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;

import React from "react";
import "./../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./../context/StateProvider";
import { db, auth } from "./../firebase/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/signin"}>
          <div className="header__navOption" onClick={handleAuthentication}>
            <span className="header__navOptionLineOne">
              Hello {user?.email}
            </span>
            <span className="header__navOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Retuns</span>
          <span className="header__navOptionLineTwo">Order</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__basket">
          <ShoppingBasketIcon />
          <span className="header__navOptionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

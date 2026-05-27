import { NavLink } from "react-router";
import Logo from "../assets/images/logo-white.png";
import MobileLogo from "../assets/images/mobile-logo-white.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Header.css";

export default function Header({ cart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const Navigate = useNavigate();

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const onClickHandler = () => {
    console.log("Search for:", searchTerm);
    Navigate(`/?search=${searchTerm}`);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    } else if (e.key === "Escape") {
      setSearchTerm("");
    }
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={Logo} />
            <img className="mobile-logo" src={MobileLogo} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={onChangeHandler}
            onKeyDown={keyDownHandler}
          />

          <button className="search-button" onClick={onClickHandler}>
            <img
              className="search-icon"
              src="../src/assets/images/icons/search-icon.png"
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink to="/orders" className="orders-link header-link">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink to="/checkout" className="cart-link header-link">
            <img
              className="cart-icon"
              src="../src/assets/images/icons/cart-icon.png"
            />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

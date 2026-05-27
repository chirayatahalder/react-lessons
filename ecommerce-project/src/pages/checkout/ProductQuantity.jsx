import axios from "axios";
import { useState, useRef } from "react";

export default function ProductQuantity({ cartItem, loadCartItems }) {
  const [updateQuantity, setUpdateQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const inputRef = useRef(null);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCartItems();
  };

  const updateCartItem = async () => {
    if (!updateQuantity) {
      setUpdateQuantity(true);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);

      return;
    }

    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity),
    });

    await loadCartItems();

    setUpdateQuantity(false);
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      updateCartItem();
    } else if (e.key === "Escape") {
      setUpdateQuantity(false);
    }
  };

  return (
    <>
      <div className="product-quantity">
        <span>
          Quantity:
          <span className="quantity-label">
            {updateQuantity ? (
              <input
                type="text"
                name="Cart Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ width: "50px" }}
                onKeyDown={keyDownHandler}
                ref={inputRef}
              />
            ) : (
              `${cartItem.quantity}`
            )}
            {/* <input
              type="text"
              name="Cart Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ width: "50px" }}
            /> */}
            {/* {cartItem.quantity} */}
          </span>
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={updateCartItem}
        >
          Update
        </span>
        <span
          className="delete-quantity-link link-primary"
          onClick={deleteCartItem}
        >
          Delete
        </span>
      </div>
    </>
  );
}

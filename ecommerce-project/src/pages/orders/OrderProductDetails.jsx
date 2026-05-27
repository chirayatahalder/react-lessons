import dayjs from "dayjs";
import { NavLink } from "react-router";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import axios from "axios";

export default function OrderProductDetails({
  product,
  order,
  loadCartItems,
  loadOrders,
}) {
  const addToCart = async () => {
    console.log("Adding to cart:", product.productId);
    await axios.post("/api/cart-items", {
      productId: product.productId,
      quantity: 1,
    });
    await loadCartItems();
    await loadOrders();
  };

  return (
    <>
      <div className="product-image-container">
        <img src={product.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{product.product.name}</div>
        <div className="product-delivery-date">
          Arriving on: {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
        </div>
        <div className="product-quantity">Quantity: {product.quantity}</div>
        <button className="buy-again-button button-primary" onClick={addToCart}>
          <img className="buy-again-icon" src={BuyAgainIcon} />
          <span className="buy-again-message">Add to Cart</span>
        </button>
      </div>

      <div className="product-actions">
        <NavLink to={`/tracking/${order.id}/${product.productId}`}>
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </NavLink>
      </div>
    </>
  );
}

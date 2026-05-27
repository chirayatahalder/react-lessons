import { formatMoney } from "../../utils/money";
import ProductQuantity from "./ProductQuantity";

const CartItemDetails = ({ cartItem, loadCartItems }) => {
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <ProductQuantity cartItem={cartItem} loadCartItems={loadCartItems} />
      </div>
    </>
  );
};

export default CartItemDetails;

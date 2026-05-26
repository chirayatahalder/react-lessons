import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";

const OrderSummary = ({ deliveryOptions, cart }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {

          return (
            <div className="cart-item-container" key={cartItem.productId}>
              <DeliveryDate
                deliveryOptions={deliveryOptions}
                cartItem={cartItem}
              />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderSummary;

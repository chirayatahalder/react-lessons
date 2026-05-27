import OrderProductDetails from "./OrderProductDetails";

export default function OrderDetailsGrid({ order, loadCartItems, loadOrders }) {
  return (
    <div className="order-details-grid">
      {order.products &&
        order.products.map((product) => {
          return (
            <OrderProductDetails
              key={product.productId}
              product={product}
              order={order}
              loadCartItems={loadCartItems}
              loadOrders={loadOrders}
            />
          );
        })}
    </div>
  );
}

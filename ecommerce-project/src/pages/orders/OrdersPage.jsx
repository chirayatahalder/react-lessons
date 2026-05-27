import OrderDetailsGrid from "./OrderDetailsGrid";
import OrderHeader from "./OrderHeader";
import { Fragment } from "react";

export default function OrdersPage({ orders, loadCartItems, loadOrders }) {
  return (
    <div className="orders-page">
      <div className="page-title">Your Orders</div>

      <div className="orders-grid">
        {orders &&
          orders.map((order) => {
            return (
              <Fragment key={order.id}>
                <div className="order-container">
                  <OrderHeader order={order} />
                  <OrderDetailsGrid order={order} loadCartItems={loadCartItems} loadOrders={loadOrders} />
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

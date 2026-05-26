import OrderDetailsGrid from "./OrderDetailsGrid";
import OrderHeader from "./OrderHeader";
import { Fragment } from "react";

export default function OrdersPage({ orders }) {
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
                  <OrderDetailsGrid order={order} />
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

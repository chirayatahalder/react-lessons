
import Header from "../../components/Header";
import "./Orders.css";
import OrdersPage from "./OrdersPage";

const Orders = ({ orders, cart, loadCartItems, loadOrders }) => {
  return (
    <>
      <title>Orders</title>
      <link
        rel="shortcut icon"
        href="images/orders-favicon.png"
        type="image/x-icon"
      />

      <Header cart={cart} />

      <OrdersPage orders={orders} loadCartItems={loadCartItems} loadOrders={loadOrders} />
    </>
  );
};

export default Orders;

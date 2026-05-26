
import Header from "../../components/Header";
import "./Orders.css";
import OrdersPage from "./OrdersPage";

const Orders = ({ orders, cart }) => {
  return (
    <>
      <title>Orders</title>
      <link
        rel="shortcut icon"
        href="images/orders-favicon.png"
        type="image/x-icon"
      />

      <Header cart={cart} />

      <OrdersPage orders={orders} />
    </>
  );
};

export default Orders;

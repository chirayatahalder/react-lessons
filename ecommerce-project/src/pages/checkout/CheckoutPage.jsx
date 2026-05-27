import { useState, useEffect } from "react";
import axios from "axios";
import "./checkout-header.css";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

const CheckoutPage = ({ cart, loadCartItems, loadOrders }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    // axios
    //   .get("/api/delivery-options?expand=estimatedDeliveryTime")
    //   .then((response) => {
    //     setDeliveryOptions(response.data);
    //   });

    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };

    // axios.get("/api/payment-summary").then((response) => {
    //   setPaymentSummary(response.data);
    // });

    fetchCheckoutData();
  }, []);

  useEffect(() => {
    const paymentSummaryData = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    paymentSummaryData();
  }, [cart]);

  return (
    <>
      <title>Checkout | Ecommerce Project</title>
      <link
        rel="shortcut icon"
        href="images/cart-favicon.png"
        type="image/x-icon"
      />

      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCartItems={loadCartItems}
          />

          <PaymentSummary
            paymentSummary={paymentSummary}
            loadCartItems={loadCartItems}
            loadOrders={loadOrders}
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

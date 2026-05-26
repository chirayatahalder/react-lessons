import { NavLink } from "react-router";
import Header from "../components/Header";
import { useParams } from "react-router";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Tracking.css";

const Tracking = ({ cart }) => {
  const params = useParams();
  const { orderId, productId } = params;
  // console.log(orderId, productId, cart);
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      // console.log(response.data);
      setTrackingData(response.data);
    };

    fetchTrackingData();
  }, [orderId]);

  if (!orderId) {
    return null;
  }

  return (
    <>
      <title>Tracking</title>
      <link
        rel="shortcut icon"
        href="images/tracking-favicon.png"
        type="image/x-icon"
      />
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <NavLink to="/orders" className="back-to-orders-link link-primary">
            View all orders
          </NavLink>

          {trackingData &&
            trackingData.products.map((product) => {
              console.log(trackingData);
              if (product.productId === productId) {
                const totalDeliveryTimeMs =
                  product.estimatedDeliveryTimeMs - trackingData.orderTimeMs;
                const timePassedMs =
                  dayjs().valueOf() - trackingData.orderTimeMs;

                let deliveryPercent =
                  (timePassedMs / totalDeliveryTimeMs) * 100;
                if (deliveryPercent > 100) {
                  deliveryPercent = 100;
                }

                let isPreparing;
                let isShipped;
                let isDelivered;

                if (deliveryPercent < 33) {
                  isPreparing = true;
                } else if (deliveryPercent >= 33 && deliveryPercent < 100) {
                  isShipped = true;
                } else if (deliveryPercent >= 100) {
                  isDelivered = true;
                }

                return (
                  <Fragment key={product.productId}>
                    <div className="delivery-date">
                      {deliveryPercent >= 100
                        ? "Delivered on: "
                        : "Arriving On: "}
                      {dayjs(product.estimatedDeliveryTimeMs).format(
                        "dddd, MMMM D",
                      )}
                    </div>

                    <div className="product-info">{product.product.name}</div>

                    <div className="product-info">
                      Quantity: {product.quantity}
                    </div>

                    <img
                      className="product-image"
                      src={product.product.image}
                    />
                    <div className="progress-labels-container">
                      <div
                        className={`progress-label ${isPreparing && "current-status"}`}
                      >
                        Preparing
                      </div>
                      <div
                        className={`progress-label ${isShipped && "current-status"}`}
                      >
                        Shipped
                      </div>
                      <div
                        className={`progress-label ${isDelivered && "current-status"}`}
                      >
                        Delivered
                      </div>
                    </div>

                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${deliveryPercent}%`,
                        }}
                      ></div>
                    </div>
                  </Fragment>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Tracking;

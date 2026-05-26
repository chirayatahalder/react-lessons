import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Error404 from "./pages/Error404";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });

    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });

    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route index element={<HomePage products={products} cart={cart} />} />
      <Route
        path="/checkout"
        element={<CheckoutPage products={products} cart={cart} />}
      />
      <Route
        path="/orders"
        element={<Orders orders={orders} cart={cart} />}
      />
      <Route path="/tracking" element={<Tracking cart={cart} />} />
      <Route path="*" element={<Error404 cart={cart} />} />
    </Routes>
  );
}

export default App;

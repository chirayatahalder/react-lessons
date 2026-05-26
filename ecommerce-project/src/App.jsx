import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Error404 from "./pages/Error404";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });

    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
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
        element={<Orders products={products} cart={cart} />}
      />
      <Route path="/tracking" element={<Tracking cart={cart} />} />
      <Route path="*" element={<Error404 cart={cart} />} />
    </Routes>
  );
}

export default App;

import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useSearchParams } from "react-router";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Orders from "./pages/orders/Orders";
import Tracking from "./pages/Tracking";
import Error404 from "./pages/Error404";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const loadCartItems = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  const loadOrders = async () => {
    const response = await axios.get("/api/orders?expand=products");
    setOrders(response.data);
  };

  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    const getHomeData = async () => {
      const response = await axios.get(
        searchTerm ? `/api/products?search=${searchTerm}` : "/api/products",
      );
      setProducts(response.data);
    };
    getHomeData();

    // axios.get("/api/cart-items?expand=product").then((response) => {
    //   setCart(response.data);
    // });

    loadCartItems();

    // axios.get("/api/orders?expand=products").then((response) => {
    //   setOrders(response.data);
    //   console.log(response.data);
    // });

    const getOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getOrders();
  }, [searchTerm]);

  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route
        index
        element={
          <HomePage
            products={products}
            cart={cart}
            loadCartItems={loadCartItems}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage
            products={products}
            cart={cart}
            loadCartItems={loadCartItems}
            loadOrders={loadOrders}
          />
        }
      />
      <Route
        path="/orders"
        element={
          <Orders
            orders={orders}
            cart={cart}
            loadCartItems={loadCartItems}
            loadOrders={loadOrders}
          />
        }
      />
      <Route
        path="/tracking/:orderId/:productId"
        element={<Tracking cart={cart} />}
      />
      <Route path="*" element={<Error404 cart={cart} />} />
    </Routes>
  );
}

export default App;

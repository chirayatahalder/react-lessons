import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
